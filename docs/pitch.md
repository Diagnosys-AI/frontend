# Diagnosys AI: AI-Driven Comprehensive Healthcare Assistant for Junior Doctors

## Introduction

Diagnosys AI proposes a tool tailored and aimed at the UK's junior doctors - F1's, F2's, and IMT1's (first stage of specialty training). Diagnosys AI is designed to alleviate the challenges of diagnostic uncertainty and efficiency that junior doctors frequently encounter. Our solution focuses on streamlining the diagnostic process, enhancing decision-making, and ultimately contributing to better patient outcomes.

## The Pain Point

From discussions, there seems to be some degree of diagnostic uncertainty in medicine, once the history is taken. Sometimes, when things are very busy, some investigations are missed out. Hospitals are short staffed as they are, and sometimes, even when things are busy, F1's, F2's and IMT1's need to run diagnoses by the registrar (who may not even be available) if there is any uncertainty. An AI could fit in here to validate diagnoses.

On a shift, doctors don't have time to go through every potential diagnosis. One Doctor Interviewed said "Sometimes I have no idea whats going on". He went on to say, "The amount of times I've taken a history and forgotten to check one thing and had to go back to check". This lack of efficiency is the pain point that Diagnosys AI aims to address.

> "The amount of times I've been on call and I've thought "idk wtf this is""

From a different perspective, there is a large number of people started on antibiotics just because of an unclear diagnosis. Take the [Sepsis Pathway](https://www.britishjournalofcommunitynursing.com/media/zdynyl4r/bjcn-2022-27-2-69_f01.jpg):

![Sepsis Pathway](image.png)

Here, on step 3, if there are any Red Flags present on step 3. such as Systolic BP < 90 mmHg, you should start Antibiotics, even though that low BP could be due to a number of other things - a lot overlaps with Low Blood Pressure for example. This is where a Diagnosis AI could come in. It could quickly suggest potential diagnoses, and suggest further investigations, before we start Antbiotics. It could also suggest potential treatments. This will, in addition, help towards the Antibiotic Resistance Crisis.

## Current Solutions

- UpToDate: Electronic clinical resource tool for physicians and patients that provides information on Adult Primary Care and Internal Medicine, Allergy and Immunology.
  - Doctors use "Pathways" in UpToDate to help them with diagnosis.
  - This is tedious to navigate, and is not very user friendly, especially on call

Current process is:

1. Patient goes to A&E Reception
2. Traige and Traffic Lighting by Nurse
3. History is taken by Doctor
4. Emergency Department (ED) - where the patient is sent to
5. Acute Medical Unit (AMU) - Next if needed, otherwise sent home

## Proposed Solution

A query engine is an end-to-end pipeline that allows you to ask questions over your data. It takes in a natural language query, and returns a response, along with reference context retrieved and passed to the LLM.

Use a MultiModal Retrieval-Augmented Generation (RAG) Stack, contexualised with best practice and resources (listed below) with an LLM (Gemini) to provide a comprehensive list of potential diagnoses, investigations and treatments. This will be a tool for Junior doctors, and will be input with the History taken from a patient. In the above process, it will fit in-between stage 3 and 4. In detail:

- Input (LLM be prompted with) History, Examinations done and (in the future) Patient Records
- Generate potential diagnoses and further investigation
- Specific things that could have been be missed out, as well as potential treatments
- Suggest potential examinations and what might be found in them i.e. What are red flags from suggested examinations to look out for
- Trust in the AI is a risk factor. This is mitigated by providing citations to the contextual information, such as Oxford Handbook of Clinical Medicine, Kumar & Clark's Clinical Medicine, etc.
- Can utilise multi=modal Models with Images, with rashes for example. These will refernece images from DermNet NZ

## Resources / Context Used:

- The Oxford Handbook of Clinical Medicine is a pocket textbook aimed at medical students and junior doctors, and covers all aspects of clinical medicine.
- Kumar & Clark's Clinical Medicine - Textbook aimed at medical students in the preclinical years of study.
- DermNet NZ - DermNet NZ is a website dedicated to dermatology. It has a large collection of photos and information on skin conditions.
- NICE CKS - NICE guidelines are evidence-based recommendations for health and care in England. They set out the care and services suitable for most people with a specific condition or need, and people in particular circumstances or settings.
- The SOCRATES acronym in history taking can be a useful tool for clinicians to determine the nature of a patient's pain.

## Potential Added Benefits

- Can be used to help train Junior Doctors / Medical Students.
- This will also help towards the Antibiotic Resistance Crisis.
- Eventually, can be used to help patients self-diagnose, and know when to go to the GP (111 sucks balls).

## Customers

The users are not the customers in this case. While the users here are specifically F1's, F2's and IMT1's, a **customer** is someone who pays for this service.

- Pitch this to the Trust of a particular hospital (They already pay millions for UpToDate access).
- The Trust is different per university/Hospital ??? Verify this. Should target 1 trust to start with.
- I will have to pitch this to the Clinical director's of a trust. These people will be very critical.

## Risks & Challenges

- **Litigation and Reliability:** Clearly position Diagnosys AI as an assistive tool, not a replacement for medical judgment.
- **Data Privacy and Security:** Implement robust security measures to protect sensitive patient data.
- **Building Trust:** Trust in the AI is a critical risk factor. This is mitigated by providing citations to the contextual information, such as Oxford Handbook of Clinical Medicine, Kumar & Clark's Clinical Medicine, etc.

## Technical Feasibility

- **Multimodal Data Analysis:** Utilizing Gemini AI, Diagnosys AI will process and analyze comprehensive patient histories, examination results, and potentially integrate patient records in the future. This includes textual data and image-based data (e.g., rashes, DermNet NZ).
- **Diagnostic and Investigative Suggestions:** The AI will generate a list of potential diagnoses and recommend further investigations based on the inputted history and examinations, contextualized with best practice resources.
- **Citation and Trust Building:** Each suggestion will be backed by citations from trusted medical resources like the Oxford Handbook of Clinical Medicine and Kumar & Clark's Clinical Medicine, building trust and serving as an educational tool.
- **User Interface:** A simple, intuitive interface will be developed using Next.js and React, allowing junior doctors to input patient data swiftly and receive AI-generated suggestions.

## Just Cause

Diagnosys AI is dedicated to a Just Cause - Diagnosys AI is committed to a powerful Just Cause: Transforming healthcare by empowering junior doctors with AI-driven tools for precise diagnosis and effective treatment. Our vision is a healthcare system where misdiagnosis and unnecessary treatments are dramatically reduced, bolstering the confidence and capability of junior doctors. This endeavor not only enhances patient care but also combats global issues like the Antibiotic Resistance Crisis.

## Building the Tech Stack

- **LlamaIndex Integration:** For aggregating and contextualizing information from various medical resources and databases.
- **TruLens for Evaluation:** To continuously assess the AI's diagnostic suggestions for accuracy and relevance, ensuring alignment with current medical standards.
- **SOCRATES Integration:** Incorporating the SOCRATES acronym tool for pain assessment in the AI's analysis framework.
- **Image Analysis Capabilities:** Integration of image recognition for dermatological assessments.

## MVP Features for Hackathon

- **Initial Symptom Checker:** A basic version that takes in patient history and examination findings to suggest potential diagnoses.
- **Resource-Backed Recommendations:** AI-generated suggestions will include references to medical textbooks and guidelines.
- **Simple Doctor Interface:** An interface where junior doctors can quickly input patient data and receive suggestions.

**Goal:** Showcase how AI can assist in preliminary medical diagnostics, offering potential to reduce the burden on healthcare professionals and improve patient care.
