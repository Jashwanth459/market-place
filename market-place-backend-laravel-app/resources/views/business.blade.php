@extends('layout')
@section('content')
<html>

<body>
    <div class="container">
    <div>
            <div className="body_wrapper">
                <div className="header">
                    <div className="row">
                        <div className="col-1">

                            <img src={business_owner_page_data} />
                            <h3>{fname} {lname} (Owner) <br />{Mobile}<br />{userName}</h3>
                            <p></p>
                            <a className="profile-edit-btn">
                                <i className="fa fa-edit"></i>
                            </a>
                        </div>

                    </div>
                </div>

                
                <div className="small-container">
                    <h2 className="title">Our Products</h2>
                    <div className="row">
                            @foreach($products as $product)
                                <div className="col-sm-4">
                                    <img src={{$product->p_img}} />
                                    <h4>{{$product->p_name}}</h4>
                                    <div className="rating">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star-o"></i>
                                    </div>
                                    <p>${bo_product['price_per_unit']}</p>
                                    <button
                                        id="modify_product"
                                        name={bo_product}
                                    >Modify</button>
                                    <button 
                                        id="delete_product"
                                        name={bo_product}
                                        onClick={onDelete}
                                    >Delete</button>
                                </div>
                                @endforeach
                    </div>
                </div>
                

                <div className="small-container">
                    <h2 className="title">Our Products</h2>
                    <div className="row">
                        
                                <div className="col-4">
                                    <img src={bo_product} />
                                    <h4>{bo_product['p_name']}</h4>
                                    <div className="rating">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star-o"></i>
                                    </div>
                                    <p>${bo_product['price_per_unit']}</p>
                                    <button
                                        id="modify_product"
                                        name={bo_product}
                                    >Modify</button>
                                    <button 
                                        id="delete_product"
                                        name={bo_product}
                                        onClick={onDelete}
                                    >Delete</button>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="small-container">
                    <div className="testimonial">
                        <h2>To add more products</h2>
                        <h3>Click below</h3>

                        <div className="row">
                            {
                                business_owner_page_data['testimonial'].map((bo_testimonial_data) => (
                                    <div className="col-5">
                                        <img src={bo_testimonial_data} />
                                        <h3>{bo_testimonial_data['name']}</h3>
                                    </div>
                                ))
                            }
                            <div className="col-5">

                                <img src={plusImage} />
                                <h3>More Categories</h3>
                            </div>
                        </div>
                    </div>
                    <br />
                    <br />
                    <div className="small-container">
                        <h2 >Moderate Posts</h2>
                        <div className="row">
                            {
                                posts.map((bo_posts_data) => (
                                    <div className="col-2">
                                        <h2>{bo_posts_data['post_name']}</h2>
                                        <h4>{bo_posts_data['post_description']}</h4>
                                        <br />
                                    </div>
                                ))
                            }
                           
                        </div>

                        
                        <br />
                        <a href="#">Click for more posts</a>

                    </div>
                </div>

                <div className="user-type-display">
                    Signed in as a Busniess Owner
                </div>
                <div className="my-chat">
                </div>
                <br />
            </div>
        </div>
    </div>
</body>

</html>
@endsection