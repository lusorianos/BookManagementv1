import React from 'react';
import { Button} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Book = ({
  id,
  bookname,
  author,
  price,
  quantity,
  isbn,
  handleRemoveBook
}) => {
  const history = useHistory();
  return (
    <tr>
      <td>{bookname}</td>
      <td>{author}</td>
      <td>{quantity}</td>
      <td>R$ {price}</td>
      <td>{isbn}</td>
      <td>
        <Button variant="primary" className="btn btn-success btn-sm" onClick={() => history.push(`/edit/${id}`)}>
          <i className="bi bi-pencil-square"></i>
        </Button>{' '}
      </td>
      <td>
        <Button variant="danger" className="btn btn-danger btn-sm" onClick={() => handleRemoveBook(id)}>
          <i className="bi bi-x-lg"></i>
        </Button>
      </td>
    </tr>
  );
};

export default Book;