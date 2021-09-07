[rsschool-cv](https://igor-khramko.github.io/rsschool-cv/cv)
---
# Igor Khramko

## Contact Info
* Phone: +37529 5249074
* Telegram: [@fenro9](https://t.me/fenro9)
* E-mail: [igorkhramko@gmail.com](https://mailto:igorkhramko@gmail.com)
* GitHub: [igor-khramko](https://github.com/igor-khramko)

## About Me
I am 27 years old. I have a higher education and experience in the army. I work as a technical support specialist and want to improve my knowledge in front-end development.

## Education
#### University
Belarusian National Technical University (Faculty of Information Technology and Robotics)

#### Courses:
* Programming HTML, CSS, JavaScript (Stormnet)
* JavaScript: advanced level (IT-Academy)

## Skills
* HTML5.
* CSS3: Pug (Jade), SCSS, BEM methodology, Bootstrap.
* JavaScript (in progress).
* Version control: Git (remote service GitHub).
* Module Bundlers: Gulp.
* Editors: Brackets, VSCode, WebStorm, Photoshop.

## Code example
Write a function **nicknameGenerator**, that takes a string name as an argument and returns the first 3 or 4 letters as a nickname.

If the 3rd letter is a consonant, return the first 3 letters.
If the 3rd letter is a vowel, return the first 4 letters.
If the string is less than 4 characters, return "Error: Name too short".

```
function nicknameGenerator(name){
  let vowels = 'aeiou';
  if(name.length < 4) return "Error: Name too short";
  let nickName = (!vowels.includes(name[2])) ? name.substr(0,3) : name.substr(0,4);
  return nickName;
}
```

## Experience
Several small sites for friends.

No experience in commercial web application development in the development team.