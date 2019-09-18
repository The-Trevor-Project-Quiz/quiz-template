---
templateKey: QuizController
title: Joseph Quiz 5
siteMetadta:
  description: This is the fifth sample quiz from Joseph Caintic
  shareImage: /img/group-1.jpg
splash:
  backgroundImage: /img/cool_img.jpg
  buttonText: Start!
  cta:
    text: CTA1
    url: 'https://www.google.com'
  emailRequired: false
  header: This is the header for Joseph Quiz 5
  intro: |-
    Welcome to my quiz!

    1. Point 1
    2. Point 2

    * Point 3
    * Point 4

    ![Typewriter](/img/cool_img.jpg "Typewriter")
questions:
  backgroundImage: /img/backgroundStar.png
  question:
    - answers:
        correctanswer:
          description: Good Job!
          heading: Right!
        incorrectanswer:
          description: Sorry!
          heading: Wrong!
      options:
        - iscorrect: true
          optiontext: 'Yes'
      questiontext: Only 1 answer choice
    - answers:
        correctanswer:
          description: You're right again!
          heading: Right
        incorrectanswer:
          description: Better luck next time!
          heading: Wrong!
      options:
        - iscorrect: false
          optiontext: 'Yes'
        - iscorrect: true
          optiontext: 'No'
      questiontext: Two choices
    - answers:
        correctanswer:
          description: Great job!
          heading: You are correct!
        incorrectanswer:
          description: At least you tried!
          heading: You are wrong!
      options:
        - iscorrect: false
          optiontext: 'Yes'
        - iscorrect: false
          optiontext: 'No'
        - iscorrect: true
          optiontext: Maybe
      questiontext: Three choice question!
  questionvalue: 50
finalpage:
  backgroundImage: /img/stacey-background.jpg
  cta:
    text: DONATE
    url: 'https://www.amazon.com'
  outro: Thank you for taking the quiz!
---
