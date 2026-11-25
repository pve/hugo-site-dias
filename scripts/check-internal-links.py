#!/usr/bin/env python3
"""Check internal book links in Hugo content.

Finds markdown links of the form [text](/book/...) in content/**/*.md and
verifies that the target page exists and is not a draft.

The target is resolved the way Hugo resolves it when no slug or url is set:
/book/<path>/ maps to content/book/<path>.md, content/book/<path>/index.md
or content/book/<path>/_index.md.

Broken links in published (draft: false) pages are errors and make the
script exit with status 1. Broken links in draft pages are reported as
warnings only, because Hugo does not build drafts in production.

Usage: python3 scripts/check-internal-links.py   (run from the repo root)
"""

import re
import sys
from pathlib import Path

CONTENT = Path("content")
LINK_RE = re.compile(r"\]\((/book/[^)\s#]*)(#[^)\s]*)?(?:\s+\"[^\"]*\")?\)")
FENCE_RE = re.compile(r"^\s*(```|~~~)")


def split_front_matter(text):
    """Return (front_matter, body, body_start_line)."""
    lines = text.split("\n")
    if lines and lines[0].strip() in ("---", "+++"):
        marker = lines[0].strip()
        for i in range(1, len(lines)):
            if lines[i].strip() == marker:
                return "\n".join(lines[1:i]), lines[i + 1 :], i + 2
    return "", lines, 1


def fm_value(front_matter, key):
    m = re.search(rf"^{key}\s*[:=]\s*(.+?)\s*$", front_matter, re.MULTILINE)
    return m.group(1).strip("'\"").lower() if m else None


def is_draft(path):
    fm, _, _ = split_front_matter(path.read_text(encoding="utf-8"))
    return fm_value(fm, "draft") == "true"


def resolve(dest):
    rel = dest.strip("/")
    for candidate in (
        CONTENT / f"{rel}.md",
        CONTENT / rel / "index.md",
        CONTENT / rel / "_index.md",
    ):
        if candidate.is_file():
            return candidate
    return None


def main():
    if not CONTENT.is_dir():
        print("check-internal-links: run from the repo root (content/ not found)")
        return 2

    errors, warnings = [], []
    for src in sorted(CONTENT.rglob("*.md")):
        fm, body, start = split_front_matter(src.read_text(encoding="utf-8"))
        for key in ("slug", "url"):
            if fm_value(fm, key) is not None:
                warnings.append(
                    f"{src}: has '{key}:' in front matter; links to it may not "
                    "resolve the way this script assumes"
                )
        src_draft = fm_value(fm, "draft") == "true"
        in_fence = False
        for offset, line in enumerate(body):
            if FENCE_RE.match(line):
                in_fence = not in_fence
                continue
            if in_fence:
                continue
            for m in LINK_RE.finditer(line):
                dest = m.group(1)
                target = resolve(dest)
                if target is None:
                    problem = "page does not exist"
                elif is_draft(target):
                    problem = f"target is a draft ({target})"
                else:
                    continue
                msg = f"{src}:{start + offset}: {dest} — {problem}"
                (warnings if src_draft else errors).append(msg)

    for w in warnings:
        print(f"warning: {w}")
    for e in errors:
        print(f"error: {e}")
    if errors:
        print(f"check-internal-links: {len(errors)} broken link(s) in published pages")
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())
