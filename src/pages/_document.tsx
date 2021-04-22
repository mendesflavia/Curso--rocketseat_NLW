import Document, {Html, Header, Main, NextScript} from 'next/document';

export default class MyDocument extends Document {
    render () {
        return(
            <Html>
                <Header>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Inter&family=Lexend:wght@500;600&display=swap" rel="stylesheet"/>
                </Header>

                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>


         );
    }
}