**리액트 네이티브 참조사이트**

[리액트 네이티브 사용가이드](https://facebook.github.io/react-native/docs/statusbar.html)
		
[아이콘 참조 사이트](https://expo.github.io/vector-icons/)

[js 및 노마드 강좌 사이트](https://academy.nomadcoders.co)

[리액트 네이티브 기초](https://yuddomack.tistory.com/entry/5React-Native-%EB%A0%88%EC%9D%B4%EC%95%84%EC%9B%83-%EB%94%94%EC%9E%90%EC%9D%B8-1%EB%B6%80-flex%EC%99%80-width-height?category=754156)


마지막으로 참고하던 액션시트 사이트
https://www.npmjs.com/package/react-native-actionsheet


만들던 스낵 사이트
https://snack.expo.io/@lth9710/paranoid-scones

보던사이트
https://yuddomack.tistory.com/entry/5React-Native-%EB%A0%88%EC%9D%B4%EC%95%84%EC%9B%83-%EB%94%94%EC%9E%90%EC%9D%B8-2%EB%B6%80-%EB%B0%B0%EC%B9%98Flex-Direction%EC%99%80-%EC%A0%95%EB%A0%ACjustify-content-align-items

https://jsdev.kr/t/react-native/2480

리액트 네이티브로만들기
https://www.slideshare.net/taggon/react-native

스케치 사이트
https://sneakpeekit.com/

안드로이드스튜디오 대시보드
https://developer.android.com/about/dashboards/

로그나오게하는명령어
react-native start --port 8082 ( 왜인지는 차차 알아가야할듯..)

및 해당링크
https://stackoverflow.com/questions/44446523/unable-to-load-script-from-assets-index-android-bundle-on-windows

안드로이드스튜디오 및 환경구축
https://hy3on.tistory.com/63

----
다음 단계에 따라 문제가 해결되었습니다.

다른 포트에서 포장기 실행 react-native start --port 8084 --reset-cache
react-native run-android --port 8084 두 번째 명령 프롬프트 창에서 실행하십시오  .
오류 화면이 나타나면 클릭하십시오  Ctrl + M.
맨 아래의 개발자 설정 버튼을 클릭하십시오.
장치 호스트 버튼 및 장치 디버그 버튼을 클릭하십시오.
입력 한 다음  localhost:8084 확인 버튼을 클릭하십시오.
다시 실행 react-native run-android --port 8084

react-native start --reset-cache

제플린
https://app.zeplin.io/project/5c248d971c6890243dbf6b74