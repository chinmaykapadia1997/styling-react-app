import React from "react";
import ItemComponent from "./ItemsComponent";
import "./ListComponent.css";

const ListComponent = props => {
    //const [oldData, newData] = useState('');
  console.log(props.items);
  //var arr = props.items;
  return (
    <div>
        <div>
      {
          props.items.map(val=>(
              <ItemComponent>
                  {val.data}
              </ItemComponent>
          ))
      }

        </div>
    </div>
  );
};

export default ListComponent;
