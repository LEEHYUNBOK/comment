# 댓글 현황

```bash
yarn install
npx prisma migrate dev
(.env 생성)
yarn dev
```

### Deploy to Vercel

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

## User 가입 부분

- 입력칸에 어느 하나라도 입력되지 않으면 User 가입 버튼 disabled
- User 이름이 이미 존재 하면 "이미 존재하는 사용자 이름입니다." alert창 출력
  - 그리고 입력칸 모두 빈칸으로 되돌림
- 비밀번호는 중복 가능하게 함(hash 값으로 db에 저장)

## 댓글 추가 부분

- 아이디가 다르면 "사용자가 아닙니다." 출력
- 비밀번호가 다르면 "비밀번호가 다릅니다." 출력
- 아이디, 비밀번호가 올바르면 출력
- 입력칸에 어느 하나라도 입력되지 않으면 댓글 작성 버튼 disabled

## 댓글 내용 입력 부분

- db에 p태그로 묶여서 내용이 들어감
- 내용 출력은 <div>태그로 replace하여 출력

## 좋아요 버튼

- 누르면 1증가

## 삭제 버튼

- 삭제 비밀번호가 다를 경우 "비밀번호가 다릅니다." 출력
- User 이름이 다르면 "사용자가 아닙니다." 출력

## 대댓글 추가 부분

- 아이디가 다르면 "사용자가 아닙니다." 출력
- 비밀번호가 다르면 "비밀번호가 다릅니다." 출력
- 아이디, 비밀번호가 올바르면 출력
- 입력칸에 어느 하나라도 입력되지 않으면 댓글 작성 버튼 disabled

## 대댓글 삭제 버튼

- 삭제 비밀번호가 다를 경우 "비밀번호가 다릅니다." 출력
- User 이름이 다르면 "사용자가 아닙니다." 출력
