# music_recommender

■サービス概要
新しい音楽を聴きたいが、自分にあった音楽を探すのがむずがしかったり時間がかかってしまう人に
すぐに自分にあった音楽をお勧めしてくれる
音楽推薦アプリです。

■ユーザーが抱える課題
新しい音楽を探すのがめんどくさい。

■課題に対する仮説
- 音楽を探すのが大変
  1. Spotifyには「あなただけの音楽」や「今週のスポットライト」などがあるが、表示されているプレイリストが多く、プレイリストを毎回開かないとどのようなプレイリストなのかを確かめられない。
  2. Spotifyの「あなただけの音楽」にも音楽の好みや興味に基づいたカスタマイズされた音楽の提案はあるが、自分の知ってる曲や有名な曲ばかりで新しい音楽と出会えない。

■解決方法
- 簡単に音楽を探すことができるウェブアプリ
  - おすすめから自分にあったプレイリストを探すのではなく、ユーザー自身がどのようなプレイリストにするかを設定でき、そのプレイリストにあった音楽を探してくれる。
  - 自分の好みと関係なく、音楽の人気度や雰囲気などから音楽を取得できる。

■メインのターゲットユーザー
音楽が好きな人
新しい音楽を探す大変さから同じ音楽ばかり聴いてしまい、今聞いている音楽に飽きて新しい音楽を聴きたいと感じている。

■実装予定の機能
- 利用者
    - Spotifyと連携し、ユーザーのライブラリにプレイリストを保存できる
    - 人気度やジャンルを選択し、その条件に合った曲を取得できる
    - アルバム画像をクリックすると、プレビュー再生ができる
    - 曲名をタップすると、その曲の紹介ページにアクセスできる
- 管理ユーザー
    - 音楽のジャンルや条件を管理できる
    - システムの利用状況や統計情報を確認できる

■なぜこのサービスを作りたいのか？
自分は元々音楽を聴くことが好きでよく聴いているのですが、自分にあった新しい音楽を見つけるのは難しく同じ曲ばかり聴いていました。そこで、自分の知らない新しい音楽を簡単に見つけられるようにするために、このサービスを作りたいと思いました。

■スケジュール
企画〜技術調査：5/21〆切
README〜ER図作成：5/29〆切
メイン機能実装：5/30 - 6/10
β版をRUNTEQ内リリース（MVP）：6/10〆切
本番リリース：6月末

■技術選定
- Rails5
- postgresql
- JavaScript
- Bootstrap
- fly.io
- Spotify API

■figmaのリンク
https://www.figma.com/file/Jd3uOMsxx6fJ6bPHprlzrz/%E7%84%A1%E9%A1%8C?type=design&node-id=0%3A1&t=33IZ7w7dqW9wki24-1

■draw.io
[![Image from Gyazo](https://i.gyazo.com/52a4873c9536d4affcf2759fb292ee6a.png)](https://gyazo.com/52a4873c9536d4affcf2759fb292ee6a)
