import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


const ProductComponent = () =>{
    const products = useSelector((state) => state.allproducts.products);
    const renderlist = products.map((product) => {
        const {id, title,image, price, category} = product;
        return (
            <div className="four wide column" key={id}>
                <Link to={`/product/${id}`}>
                <div className="ui link cards">
                    <div className="card">
                        <div className="image">
                            <img src={image} alt={title} />
                        </div>
                        <div className="content">
                            <div className="header">{title}</div>
                            <div className="meta price">$ {price}</div>
                            <div className="meta">{category}</div>
                        </div>
                    </div>
                </div>
                </Link>

            </div>
        );
    })

    return <>{renderlist}</>
};

export default ProductComponent;




// import React from "react";
// import { useSelector } from "react-redux";


// const ProductComponent = () => {

//     const product = useSelector((state) => state.allproducts.products);
//    console.log(product);

//    const renderList = product.map((prodd) => {
//     const {id, title, image, price, category} = prodd;
//     return(
//         <div className="four column wide" key={id}>
//                     <div className="ui link cards">
//                         <div className="card">
//                             <div className="image">
//                                 <img src={image} alt={title} />
//                             </div>
//                             <div className="content">
//                                 <div className="header">{title}</div>
//                                 <div className="meta price">$ {price}</div>
//                                 <div className="meta">{category}</div>
//                             </div>
                          
//                         </div>
//                     </div>
//                 </div>
//                 );
//    });


//     return(
//         <> {renderList}
//          {/* {
//             product.map((prod) => {
//                 // const {id, title, image, price, category} = prod;

//                 <div className="four column wide" key={prod.id}>
//                     <div className="ui link cards">
//                         <div className="card">
//                             <div className="image">
//                                 <img src={prod.image} alt={prod.title} />
//                             </div>
//                             <div className="content">
//                                 <div className="header">{prod.title}</div>
//                                 <div className="meta price">$ {prod.price}</div>
//                                 <div className="meta">{prod.category}</div>
//                             </div>
                          
//                         </div>
//                     </div>
//                 </div>
//             })
        
//         } */}

//         </>
//     );
// };

// export default ProductComponent;