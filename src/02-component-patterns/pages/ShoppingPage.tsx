import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components';

import { products } from '../data/products';


const product = products[0];



export const ShoppingPage = () => {
 

    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />

            <ProductCard 
                key={ product.id }
                product={ product }
                className="bg-dark text-white"
                initialValues={{
                    count: 6,
                    // maxCount: 10,
                }}
            >
                {
                    ({ reset, count, isMaxCountReached, maxCount, increaseBy  }) => (
                        <>
                            <ProductImage  />
                            <ProductTitle  />
                            <ProductButtons  />
                            
                            {/* <button onClick={ reset }>Reset</button>
                            <button onClick={ () => increaseBy(-2) }> -2 </button>
                            {
                                ( !isMaxCountReached && <button onClick={ ()=> increaseBy(+2) }> +2 </button> )
                            }
                            
                            <span>{ count } - { maxCount }</span> */}
                        </>
                    )
                }
            </ProductCard>

        </div>
    )
}
