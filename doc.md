# markdown を書きたい！

今まで一度も書いたことがなかった、あの憧れの markdown を、ついに書くことになりました。

まずは環境構築。

vscode で書きたいのは決まっていたので調べてみると、なんと標準機能でプレビューができるらしい。

[任意のファイル名].md という名前のファイルを生成したら、それを開いて Ctrl + Shift + v でプレビューが見れた。

# Next.js + TypeScript + Express (+ docker + mongodb)

# day1 docker + nodejs + nginxでdockerを学ぶ

https://qiita.com/ryo-ohnishi/items/3653f7583c8591eef333


# day2 nextjs + typescript + express + jest環境を構築

https://serip39.hatenablog.com/entry/2020/06/20/234000

# day3 mongodb + mongoExpress でデータベース構築


# day4 nodemon + ts-nodeでnode拡張、appとdbの合体


# day5 https-portalとサーバー構築


```
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
```

https://qiita.com/atlansien/items/c587a0bf2f7f9022107c
https://qiita.com/anoonoll/items/050ebb62143ada022a32

docker-compose up --build

# nodemon
https://qiita.com/twipg/items/cb969b335d66c4aee690
https://qiita.com/ckoshien/items/1a8b15fe5cc3bfc15199

https://genzouw.com/entry/2020/01/28/120014/1910/#toc_id_4

# nextjs

https://page.ak2ie.net/2019/06/17/nextjs-bootstrap/

# https

https://qiita.com/kuboon/items/f424b84c718619460c6f

# dns error

https://stackoverflow.com/questions/51541561/module-not-found-cant-resolve-dns-in-pg-lib/51781959


# graphql
https://dev.classmethod.jp/articles/graphql-tutorial-nodejsexpress/


# gcloud
gcloud compute instances create app-js n1-standard-1  --metadata-from-file startup-script=start_script.sh

gcloud compute instances add-metadata EXAMPLE_INSTANCE \
  --metadata-from-file startup-script=PATH_TO_FILE

* * * * * /usr/bin/gcloud --account=<作成した> compute instances
 start <インスタンス名> --project <プロジェクト名> --zone <ゾーン名>

 gcloud compute instances add-metadata app-js --metadata-from-file startup-script=start_script.sh


# nannkasugoi OS
 docker run --rm -v /var/run/docker.sock:/var/run/docker.sock -v "$PWD:/code/" -w="/code/" docker/compose:alpine-1.27.3 -f docker-compose-pro.yaml up -d

git clone https://github.com/kyuki3rain/app-js.git
sudo apt-get update
sudo apt update
sudo apt-get install git
sudo apt-get install docker.io
sudo apt install docker-compose
sudo usermod -aG docker $USER
sudo chmod +x /usr/bin/docker-compose
exit
