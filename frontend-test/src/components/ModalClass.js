import React from "react";
import { Modal, Button } from "react-bootstrap";

function ModalClass(props) {
  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            제목 김계란 클래스
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>클래스 소개하기</h4>
          {/* 좌측 코치 사진 */}
          {/* props.src 내장 주소라 에러 뜨는듯 ?? */}
          {/* <img src={props.src} /> */}
          {/* 우측 코치 경력 */}
          <p>
            너 인성 문제있어? 너 인성 문제있어? 너 인성 문제있어? 너 인성
            문제있어? 너 인성 문제있어? 너 인성 문제있어?너 인성 문제있어?너
            인성 문제있어?너 인성 문제있어?너 인성 문제있어?
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={props.onHide}>
            닫기
          </Button>
          {/* 함수 설정할 것 */}
          <Button variant="info" onClick={() => {}}>
            신청하기
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalClass;
