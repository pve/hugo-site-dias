#!/bin/sh
# Validate the front matter of all content with Hugo's own parser.
#
# `hugo list all` reads every content file and its front matter without
# rendering the site (under a second). A YAML error, such as a missing
# closing quote, makes it exit non-zero with the file and line number.
#
# Uses the running hugo-dias dev container when it serves this repo,
# otherwise a throwaway container from the same pinned image.
# Run from the repo root (pre-commit does that).

# Hugo v0.148.0 extended, hugomods "ci-non-root" variant: same Hugo version
# as Netlify (netlify.toml HUGO_VERSION). Pinned by digest so the image
# cannot change underneath us. Keep in sync with
# ../scripts/hugo container scripts.sh
IMAGE="hugomods/hugo@sha256:50649c9324057905480242e85b52be1bcdf6de439d0c9495b4ca71d9d9988c1a"

if ! docker info >/dev/null 2>&1; then
  echo "check-front-matter: Docker is not running. Start Docker Desktop, or skip once with SKIP=check-front-matter git commit ..."
  exit 1
fi

mount=$(docker inspect -f '{{range .Mounts}}{{.Source}}{{end}}' hugo-dias 2>/dev/null)
running=$(docker inspect -f '{{.State.Running}}' hugo-dias 2>/dev/null)

if [ "$running" = "true" ] && [ "$mount" = "$PWD" ]; then
  out=$(docker exec hugo-dias hugo list all 2>&1)
else
  out=$(docker run --rm -v "$PWD":/workspace -w /workspace "$IMAGE" hugo list all 2>&1)
fi
status=$?

if [ $status -ne 0 ]; then
  echo "$out" | grep -i -E "error" || echo "$out" | tail -5
  echo "check-front-matter: Hugo could not read the content (see above)"
  exit 1
fi
exit 0
