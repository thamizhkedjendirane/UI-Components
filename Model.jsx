import React from "react";
import { Modal } from "react-bootstrap";
function Model() {
  const [showed, setShowed] = useState(false);
  return (
    <div>
      <Button
        variant="primary"
        style={{ fontSize: "0.7rem", backgroundColor: "rgb(31, 45, 92)" }}
        onClick={() => setShowed(!showed)}
      >
        Sample
      </Button>

      <Modal show={showed} onHide={() => setShowed(!showed)}>
        <Modal.Header closeButton style={{ border: "none" }}>
          <Modal.Title className="d-flex" style={{ fontSize: "0.9rem" }}>
            <div
              className="d-flex justify-content-center align-items-center text-center"
              style={{
                backgroundColor: "rgba(255,0,0,0.1)",
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                border: "10px solid rgba(255,0,0,0.1)",
              }}
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ color: "red" }}
              >
                <path
                  d="M7.07926 0.222253C7.31275 -0.007434 7.6873 -0.007434 7.92079 0.222253L14.6708 6.86227C14.907 7.09465 14.9101 7.47453 14.6778 7.71076C14.4454 7.947 14.0655 7.95012 13.8293 7.71773L13 6.90201V12.5C13 12.7761 12.7762 13 12.5 13H2.50002C2.22388 13 2.00002 12.7761 2.00002 12.5V6.90201L1.17079 7.71773C0.934558 7.95012 0.554672 7.947 0.32229 7.71076C0.0899079 7.47453 0.0930283 7.09465 0.32926 6.86227L7.07926 0.222253ZM7.50002 1.49163L12 5.91831V12H10V8.49999C10 8.22385 9.77617 7.99999 9.50002 7.99999H6.50002C6.22388 7.99999 6.00002 8.22385 6.00002 8.49999V12H3.00002V5.91831L7.50002 1.49163ZM7.00002 12H9.00002V8.99999H7.00002V12Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <p className="my-auto ms-2" style={{ fontWeight: "600" }}>
              Home
            </p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5 style={{ fontSize: "1rem", color: "#000", fontWeight: "600" }}>
            Title of the Popup
          </h5>
          <p style={{ fontSize: "0.7rem" }}>
            Modals are positioned over everything else in the document and
            remove scroll from the body so that modal content scrolls instead.
          </p>
          <div style={{ position: "relative", width: "fit-content" }}>
            <input
              style={{
                borderRadius: "8px",
                outline: "none",
                border: "1px solid gray",
                padding: ".3rem 2rem",
                fontSize: "0.7rem",
                color: "gray",
              }}
              type="text"
              placeholder="Search.."
            />
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                position: "absolute",
                left: 0,
                top: 6,
                marginLeft: "10px",
              }}
            >
              <path
                d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z"
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
        </Modal.Body>
        <Modal.Footer style={{ border: "none" }} className="pt-0">
          <Button
            variant="secondary"
            style={{ fontSize: "0.7rem" }}
            onClick={handleClose}
          >
            Close
          </Button>
          <Button
            style={{ fontSize: "0.7rem", backgroundColor: "rgb(31, 45, 92)" }}
            variant="primary"
            onClick={handleClose}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Model;
