# music_recommender

■サービス概要
新しい音楽を聴きたいが、自分にあった音楽を探すのがむずがしかったり時間がかかってしまう人に
すぐに自分にあった音楽をお勧めしてくれる
音楽推薦アプリです。

■ユーザーが抱える課題
新しい音楽を探すのがめんどくさい。

■課題に対する仮説
- 音楽を探すのが大変
  1. Apple Musicの「今すぐ聴く」だと画面に表示されているものが多く、音楽の検索や発見のためのユーザーインターフェースが複雑。
  2. Apple Musicの「あなたにおすすめ」にも音楽の好みや興味に基づいたカスタマイズされた音楽の提案はあるが、週に一回だけだったり頻繁に更新できない。

■解決方法
- 簡単に音楽を探すことができるウェブアプリ
  - ユーザーが目的の機能に素早くアクセスできるよう、シンプルなナビゲーションメニューやアイコンを使用する。
  - 色々な音楽を聴きたいときに、何回でも更新できる。

■メインのターゲットユーザー
音楽が好きな人
新しい音楽を探す大変さから同じ音楽ばかり聴いてしまい、今聞いている音楽に飽きて新しい音楽を聴きたいと感じている。

■実装予定の機能
- 利用者
    - Apple Musicと連携し、利用者の音楽ライブラリにアクセスできる
    - ユーザーの音楽の好みや聴取履歴を分析し、おすすめの曲を取得できる
    - SNSにシェアできる
    - Apple Musicにプレイリストを保存できる
- 管理ユーザー
    - 音楽のカテゴリやアーティスト情報を管理できる
    - システムの利用状況や統計情報を確認できる

■なぜこのサービスを作りたいのか？
自分は元々音楽を聴くことが好きでよく聴いているのですが、自分にあった新しい音楽を見つけるのは難しく同じ曲ばかり聴いていました。そこで、自分の好みに合った音楽を簡単に見つけられるようにするために、このサービスを作りたいと思いました。

■スケジュール
企画〜技術調査：5/21〆切
README〜ER図作成：5/29〆切
メイン機能実装：5/30 - 6/10
β版をRUNTEQ内リリース（MVP）：6/10〆切
本番リリース：6月末

■技術選定
- Rails7
- postgresql
- JavaScript
- Bootstrap
- heroku
- Apple Music API