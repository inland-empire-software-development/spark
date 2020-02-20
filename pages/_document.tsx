import Document, {Html, Head, Main, NextScript} from 'next/document';
/**
 * Shared components amongst all pages - resources needed placed here.
 */
class Doc extends Document {
  /**
   * @return {JSX.Element}
   */
  render(): JSX.Element {
    return (
      <Html>
        <Head/>

        <body className="portal">
          <Main />
          <NextScript />

          <script src="https://kit.fontawesome.com/dc56bd4901.js" crossOrigin="anonymous"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit-icons.min.js"></script>
        </body>

      </Html>
    );
  }
}

export default Doc;
