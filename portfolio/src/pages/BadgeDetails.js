import React from "react";
import Badge from "../components/Badge";
import { Link } from "react-router-dom";
import DeleteBadgeModal from "../components/deleteBadgeModal";

function useIncreaseCount(max){
  const [count,setCount]=React.useState(0)
  if(count>max){
    setCount(0)
  }
  return [count,setCount]
}


function BadgeDetails(props) {
  const [count,setCount]=useIncreaseCount(4)
  const badge = props.badge;
  return (
    <div className="BadgeContainer woodBackg">
      <div className="acciones">
        <h2>Acciones</h2>
        <div className="editar">
          <button onClick={() => {setCount(count+1)}}>increase count:{count}</button>
          <Link to={`/Badges/${badge.id}/edit`}>Editar</Link>
        </div>
        <button onClick={props.onOpenModal} className="eliminar">
          Eliminar
        </button>
        <DeleteBadgeModal
          onDeleteBadge={props.onDeleteBadge}
          onClose={props.onCloseModal}
          isOpen={props.modalIsOpen}
        />
      </div>
      <Badge
        lastName={badge.lastName}
        firstName={badge.firstName}
        city={badge.city}
        apodo={badge.apodo}
        email={badge.email}
      />
    </div>
  );
}

export default BadgeDetails;
