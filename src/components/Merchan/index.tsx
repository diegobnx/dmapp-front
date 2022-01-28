import * as C from './style';
import merchan from '../../images/choose.jpg';

export const Merchan = () => {
  return (
    <C.Container>
      <C.TextMerchan>
        <h1>Porque anunciar seu negocio?</h1>
        <span>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet. It uses a dictionary of over 200 Latin words.
        </span>
      </C.TextMerchan>
      <C.ImgMerchan>
        <img src={merchan} alt="merchan" />
      </C.ImgMerchan>
    </C.Container>
  );
}