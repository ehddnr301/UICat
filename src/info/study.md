# Study

## contextMenu

- 핵심은 클릭에따라 open 이라는 class를 토글하는것

### 이벤트 상속

- 하위 자식요소에 하나하나 이벤트를 거는것이 아니라 부모요소에 addEventListener
- 그리고 `target.classList.contains()` 로 확인해서 이벤트 동작

### 이벤트 버블링

```html
<div class="one">
  <div class="two">
    <div class="three"></div>
  </div>
</div>
```

- 위와 같은 상황에서 모든 div에 click 을 감지하고 있다면 최하위 태그인 three를 눌렀을 때
- three -> two -> one 순서대로 event가 실행이 됨.
- `event.stopPropagation()` 로 막을 수 있습니다.
