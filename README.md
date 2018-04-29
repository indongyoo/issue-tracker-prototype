## 이슈 트래커 + DOM 조작 라이브러리 + 함수형 라이브러리 만들기 라이브 코딩

라이브러리나 프레임워크 없이 ES6+와 Web APIs(바닐라JS)로 간단한 이슈 트래커 앱을 만드는 방송입니다. 앱을 만들면서 중복되는 코드를 제거하고 모듈화하면서 DOM 조작 라이브러리와 함수형 라이브러리를 만드는 식으로 진행됩니다.

### 0회 (시범 방송)
 - [방송 보기](https://www.youtube.com/watch?v=JVYgl7Gyeoc)
 - [코드 보기](https://github.com/Functional-JavaScript/FunctionalES/tree/master/articles/ES6%2C%20%ED%95%A8%EC%88%98%ED%98%95%20%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D%2C%20%EB%B9%84%EB%8F%99%EA%B8%B0%2C%20%EB%8F%99%EC%8B%9C%EC%84%B1%20%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D/html/%EB%B6%80%EB%A1%9D.%20%ED%83%9C%EC%8A%A4%ED%81%AC%20%EC%95%B1)
 - 함수형 라이브러리와 DOM 조작 라이브러리를 가지고 있는 상태에서 간단한 Task 앱 만들기
 - 템플릿 리터럴
 - UI 제어에서의 동시성 살짝 맛보기
 - 질문 답변

### 1회
 - [방송보기](https://www.youtube.com/watch?v=3SEQdmF9psY)
 - [코드보기](https://github.com/indongyoo/issue-tracker-prototype/tree/master/1)
 - 이슈 트래커 앱을 만들면서 $, $.find, $.findAll, $.el, $.append, $.on 등을 만들게 되었고, querySelector, createElement, appendChild, addEventListener 등에 대해 다룸.
 - 명령형 코드들을 리팩토링 하는 과정에서 go, pipe, reduce, curry2, find 등이 만들어졌고, for...of, 전개 연산자, 나머지 연산자 등을 다룸.

### 2회
 - [방송보기](https://www.youtube.com/watch?v=fWCzkdbs-sw)
 - [코드보기](https://github.com/indongyoo/issue-tracker-prototype/tree/master/2)
 - 델리게이트 방식으로 이벤트를 등록할 수 있도록 돕는 함수인 $.on을 리팩토링.
 - reduce 다형성을 높이고 map, extend, defaults 등의 함수을 만듬.
 - generator/iterator 등에 대한 이야기를 가볍게 다룸.

### 3회
 - [방송보기](https://youtu.be/57q407uCArA?t=740)
 - [코드보기](https://github.com/indongyoo/issue-tracker-prototype/tree/master/3)
 - DOM을 통해 데이터를 뽑는 코드를 리팩토링하여 $.formToJSON, $.toJSON 등의 함수 생성.
 - Task.list, Task.editor 로 모듈화.
 - reduce가 Promise를 제어하도록하여, go, pipe가 Promise를 만나도 동기적으로 동작하도록 수정.
 - $.closest, $.outerHTML 등 생성.
 - 태스크 생성, 완료, 수정 등의 기능 완성.

### 연관 링크
 - [ES6+, 함수형 프로그래밍, 비동기, 동시성 프로그래밍](https://github.com/Functional-JavaScript/FunctionalES)
 - [마플 깃헙](https://github.com/marpple)
 - [인프런 무료 강의](https://www.inflearn.com/course/%ED%95%A8%EC%88%98%ED%98%95-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D/)
 - [오프라인 유료 강의](https://programmers.co.kr/learn/courses/3409)