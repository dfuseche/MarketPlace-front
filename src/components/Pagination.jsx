import React, {useState} from "react";

function Pagination (props){ 

    const pageNumbers = []
    for(let i = 1; i <= Math.ceil(props.totalProducts / props.productsPerPage); i++){
        pageNumbers.push(i);
    }
    
    

    return <div >      
            <ul className="pagination">
                {pageNumbers.map(number => {
                    return <li key={number} className ="page-item">
                        <a onClick={()=> props.paginate(number)}  className="page-link">
                            {number}
                        </a>
                    </li>
                })}
            </ul>
    </div>;
}
export default Pagination;