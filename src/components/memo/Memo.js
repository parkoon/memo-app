import React from "react";
import { StyledMemo } from "../styled/StyledMemo";
import Button from "../Button";
const Memo = () => {
  return (
    <StyledMemo>
      <header>
        <h3 className="memo__title">제목</h3>
        <div className="memo__actions">
          <Button
            onClick={() => {
              alert("1");
            }}
            title={"버튼"}
          />
          <span>제목 수정됨: 2019. 02. 12</span>
        </div>
      </header>
      {/* https://offbyone.tistory.com/326 */}
      <main>
        sdflkjslfkjsadf dfslkjsdafl fjsadflksadf dfkljlasdf asdfkljsadflasd \n
        df dfkljlasdf asdfkljsadflasd df dfkljlasdf asdfkljsadflasd df
        dfkljlasdf asdfkljsadflasd df dfkljlasdf asdfkljsadflasd df dfkljlasdf
        asdfkljsadflasd df dfkljlasdf asdfkljsadflasd df dfkljlasdf
        asdfkljsadflasd df dfkljlasdf asdfkljsadflasd df dfkljlasdf
        asdfkljsadflasd df dfkljlasdf asdfkljsadflasd df dfkljlasdf
        asdfkljsadflasd df dfkljlasdf asdfkljsadflasd df dfkljlasdf
        asdfkljsadflasd df dfkljlasdf asdfkljsadflasd df dfkljlasdf
        asdfkljsadflasd df dfkljlasdf asdfkljsadflasd fsdlafjlsadf
      </main>
    </StyledMemo>
  );
};

export default Memo;
