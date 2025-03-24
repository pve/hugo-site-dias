---
date: '2025-03-24T19:45:36Z'
draft: false
title: 'How AI Can Help IT Risk Classification'
---

Here is an example of AI-assisted risk classification. I downloaded some of the entries in the Dutch [algorithm register](https://algoritmes.overheid.nl/en), which is a public register of systems that use algorithms. Some of these are AI-based. Indeed, we have AI to help check on AI...

For each entry about 30 fields are available, including name, classification, owner, et cetera.

Here is my dialogue with Claude 3.7 Sonnet. You can get the full description of each case from the algorithm register. 

Me: _Here are three examples. Please return the name of the system, and your assessment if it uses an LLM or not._

Claude:

I'll analyze each of these systems and classify them as either LLM-based or fixed algorithm-based.

1. **Virtual municipality assistant Gem**
   - **Classification**: Uses Machine Learning, but not an LLM
   - **Reasoning**: The description states it uses "supervised machine learning" to match questions with answers from a predefined library. It calculates which existing answer best matches the question rather than generating new responses. This is more characteristic of a simpler ML classification system than an LLM.

2. **AI WBSO pre-advice**
   - **Classification**: Machine Learning, but not an LLM
   - **Reasoning**: The system is described as a "self-learning Machine Learning model" that makes predictions based on specific variables to estimate risk. It appears to be a predictive model focused on risk assessment rather than language processing or generation, making it a non-LLM algorithm.

3. **Energy label generator (EP-Online)**
   - **Classification**: Fixed algorithm
   - **Reasoning**: This system uses predefined formulas and calculations to generate energy labels based on specific inputs. The description mentions algorithms but refers to calculation procedures described in technical documentation rather than any learning models. This is clearly a deterministic system using fixed rules and formulas.

None of these three systems appear to use Large Language Models. They each use different approaches: supervised machine learning for answer retrieval, predictive machine learning for risk assessment, and fixed algorithmic calculations for energy label generation.

Me: _Which of these processes personal data, just based on the description?_

Claude:

Based on the descriptions provided, here's my analysis of which systems process personal data:

1. **Virtual municipality assistant Gem**
   - **Processes personal data**: Yes
   - **Reasoning**: Although not explicitly stated, this system interacts directly with residents and businesses through chat functionality on municipal websites. It collects questions from users and monitors their feedback. The system likely processes some form of user identifiers to maintain conversation context and improve answer selection based on prior interactions.

2. **AI WBSO pre-advice**
   - **Processes personal data**: No
   - **Reasoning**: The description explicitly states "No personal data are used in the algorithm in any way." It mentions using data like number of projects, hours, wages, etc., but specifically notes that only the case number is used as an identification label. A DPIA (Data Protection Impact Assessment) was carried out with the outcome that no personal data were processed.

3. **Energy label generator (EP-Online)**
   - **Processes personal data**: Yes
   - **Reasoning**: This system likely processes personal data as it generates energy labels for specific buildings owned by specific individuals. The fact that a DPIA was conducted (and is being updated) suggests personal data is involved. The system records data about buildings that can be linked to their owners, especially since the labels are required when selling or renting properties.

Based solely on these descriptions, the Virtual municipality assistant Gem and the Energy label generator appear to process personal data, while the AI WBSO pre-advice system explicitly does not.

(end of chat interaction)

This is a promising beginning. There are around 800 of these cases to review. 

Interesting followup questions either on the entries or on the approach could be:

1. Is the description consistent with its classification? For example, there is a 'risk' field, but does it match the rest of the description?
1. Which entries seem to be missing crucial information?
1. Which entries store specific types of data?
1. Can we automate this a bit more? Stuffing the entries in a chatbot prompt does not scale very well.
1. What is the accuracy, and will other models have similar accuracy?

