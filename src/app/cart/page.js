import Image from 'next/image'
import Link from 'next/link'
import Breadcrumb from "../components/breadcrumb"
export default function Cart() {
    return (
        <div>
            <Breadcrumb title={'Cart'} />

            <section className="cart-page-area edu-section-gap">
                <div className="container">
                    <div className="table-responsive">
                        <table className="table cart-table">
                            <thead>
                                <tr>
                                    <th scope="col" className="product-remove"></th>
                                    <th scope="col" className="product-thumbnail"></th>
                                    <th scope="col" className="product-title">Product Name</th>
                                    <th scope="col" className="product-price">Price</th>
                                    <th scope="col" className="product-quantity">Quantity</th>
                                    <th scope="col" className="product-subtotal">Subtotal</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="product-remove">
                                        <Link href="#" className="remove-wishlist"><i className="icon-73"></i></Link>
                                    </td>
                                    <td className="product-thumbnail">
                                        <Link href="product-details.html"><Image src="/assets/images/shop/product-02.jpg" alt="Books" width={93} height={110} /></Link>
                                    </td>
                                    <td className="product-title">
                                        <Link href="product-details.html">Natural Science Project</Link>
                                    </td>
                                    <td className="product-price" data-title="Price"><span className="currency-symbol">$</span>70.30</td>
                                    <td className="product-quantity" data-title="Qty">
                                        <div className="pro-qty">
                                            <input type="number" className="quantity-input" defaultValue="1" />
                                        </div>
                                    </td>
                                    <td className="product-subtotal" data-title="Subtotal"><span className="currency-symbol">$</span>70.30</td>
                                </tr>
                                <tr>
                                    <td className="product-remove">
                                        <Link href="#" className="remove-wishlist"><i className="icon-73"></i></Link>
                                    </td>
                                    <td className="product-thumbnail">
                                        <Link href="#">
                                            <Image src="/assets/images/shop/product-03.jpg" alt="Digital Product" width={93} height={110} />
                                        </Link>
                                    </td>
                                    <td className="product-title">
                                        <Link href="#">The King of Drugs</Link>
                                    </td>
                                    <td className="product-price" data-title="Price">
                                        <span className="currency-symbol">$</span>70.00
                                    </td>
                                    <td className="product-quantity" data-title="Qty">
                                        <div className="pro-qty">
                                            <input type="number" className="quantity-input" defaultValue="1" />
                                        </div>
                                    </td>
                                    <td className="product-subtotal" data-title="Subtotal"><span className="currency-symbol">$</span>70.00</td>
                                </tr>
                                <tr>
                                    <td className="product-remove">
                                        <Link href="#" className="remove-wishlist"><i className="icon-73"></i></Link>
                                    </td>
                                    <td className="product-thumbnail">
                                        <Link href="product-details.html"><Image src="/assets/images/shop/product-06.jpg" alt="Digital Product" width={93} height={110} /></Link>
                                    </td>
                                    <td className="product-title">
                                        <Link href="#">The Silver Chair</Link>
                                    </td>
                                    <td className="product-price" data-title="Price">
                                        <span className="currency-symbol">$</span>70.00
                                    </td>
                                    <td className="product-quantity" data-title="Qty">
                                        <div className="pro-qty">
                                            <input type="number" className="quantity-input" defaultValue="1" />
                                        </div>
                                    </td>
                                    <td className="product-subtotal" data-title="Subtotal">
                                        <span className="currency-symbol">$</span>70.00
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="cart-update-btn-area">
                        <div className="input-group product-cupon">
                            <input placeholder="Coupon code..." type="text" />
                            <button type="submit" className="submit-btn"><i className="icon-4"></i></button>
                        </div>
                        <div className="update-btn">
                            <Link href="#" className="edu-btn btn-border btn-medium disabled">Update Cart <i className="icon-4"></i></Link>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xl-5 col-lg-7 offset-xl-7 offset-lg-5">
                            <div className="order-summery">
                                <h4 className="title">Cart Totals</h4>
                                <table className="table summery-table">
                                    <tbody>
                                        <tr className="order-subtotal">
                                            <td>Subtotal</td>
                                            <td>$210.90</td>
                                        </tr>
                                        <tr className="order-total">
                                            <td>Order Total</td>
                                            <td>$210.90</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <Link href="checkout.html" className="edu-btn btn-medium checkout-btn">Process to Checkout <i className="icon-4"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
