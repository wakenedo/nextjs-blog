import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
            rel="stylesheet"
          />
          <link href="data:image/x-icon;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAADAAAKAAAAAAAAAAAAAAAAFwAABy4AAPs4AAD/PwAA/0AAAP85AAD/LgAA8hkAAAkAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAkAAAAALQAA/0cAAP9cAgD/bgUA/3sFAP97BQD/cQUA/18DAP9GAAD/LgAA+AAAAAAAAAAAAAAAAAEAAAQAAAAAMwAA/1EBAP9qBAD/iQQA/70EAf/PAQL/0gEC/8AEAP+iBgD/ewQA/1UCAP80AAD/AAAAAAAAAAABAAADKwAA/1MBAP9rBQD/hAQA/7IDBf/qABf//yBW//8jXf//Ez7/9AAM/78EAP+GBAD/VQEA/y4AAPcAAAAAEgAAAUUAAP93BgD/mQUA/7oDCP/cABr/+wBB//8kh///WL3//1u///81hP/+Ahz/vwUA/3sHAP9GAAD/FQAAAysAAP9bAgD/nwYA/9sABf/fABf//AI///8WeP//Laf//1DQ//+G6///btn//zaH//UADP+hBgD/XQIA/y8AAOo1AAD/bQYA/7sFAf/5ABv/7AAq//8KaP//H5n//ySa//4DYv/6Cm///xuZ//8pfv//Ez3/wgQB/28FAP84AAD/PAAA/3cFAP/LAgL//gky/+oAKP/5AU//9wBO//gBUv/8Alr/9ABT//kBW///FWH//gUm/88BAv96BQD/QAAA/z0AAP92BgD/zAIC//8SPv/7AUL/6gA0/8QAJP/SADH/6AA9/+gAOv/4AD///wxV//0EKf/RAQL/ewUA/0AAAP82AAD/bQUA/7gGAP//DjX//zeS//kAQv+5ACD/uQAc/9QAJf/mADb/7AEz//4LUv//CzH/vwUA/28GAP84AAD/LQAA9VsCAP+cBQD/7QAJ//8xfP//atT//xiP/+IANv/nADb/1AAj/8sAG//zAS//8QAL/6IGAP9dAgD/LgAA5hYAACBDAAD/dQYA/7gGAP/8ABX//zB5//9UtP//O6X//xV1/+cANv/aACb/1gAP/74EAP96BQD/RgAA/wAAAAAAAAAAKwAA9lIBAP+BBQD/uAYA/+4ADf//DTP//yBV//4OP//jABn/vwAK/6UGAP+EBAD/VQEA/ywAAPEAAAAAAAAAAAAAAAAxAAD/UAEA/3UGAP+bBgD/uQUA/8sCAf/KAgH/twYA/5gEAP95BwD/UwEA/zQAAP8AAAAAAAAAAAAAAAAAAAAAAAAAACsAAPFDAAD/WAEA/2kFAP9zBgD/dgUA/2sFAP9eAgD/RQAA/y4AAPIBAAACAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAFgAABSkAAOk1AAD/PAAA/zsAAP83AAD/LAAA5QAAAAAAAAAAAAAAAAAAAAAAAAAA+B8AAOAHAADAAwAAgAEAAIABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAQAAgAEAAMADAADgBwAA+B8AAA=="
          rel="icon" type="image/x-icon" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;