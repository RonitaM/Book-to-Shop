
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import './App.css';
import Menu from './Menu';
import {httpPost,httpPostwithToken} from './HttpConfig';

export default function Product() {
	const [product,addDesc]=useState('')
	const [desc,addDes]=useState('')
	const [price,addPrice]=useState('')
	const [date,addDate]=useState('')
	const id=useParams();
	var name='';
	//console.log(id.id);

	httpPostwithToken("product/getProductsById/",id)
		.then((res)=>{		
			res.json() .then(data=>{
				if(res.ok){
					console.log(data);
					name=data.name;
					addDesc(name)
					addDes(data.description)
					addPrice(data.price)
					addDate(data.added_on)
					//console.log(name);
				}else{
					alert(data.message)
				}
			})     
		}).catch(function(res){
			console.log("Error ",res);
			//alert(error.message);
		}
		)
		
    return (
        <div class="single">
		<div class="container">
			<div class="col-md-4 single-left">
				<div class="flexslider">
					<ul class="slides">
						<li data-thumb="images/a.jpg">
							<div class="thumb-image"> <img src="../assets/images/book.png" data-imagezoom="true" class="img-responsive" alt=""/> </div>
						</li>
						
					</ul>
                    </div>
                    </div>
               

        <div class="col-md-8 single-right">
				<h3>{product}</h3>
				<div class="rating1">
					<span class="starRating">
						<input id="rating5" type="radio" name="rating" value="5"/>
						<label for="rating5">5</label>
						<input id="rating4" type="radio" name="rating" value="4"/>
						<label for="rating4">4</label>
						<input id="rating3" type="radio" name="rating" value="3" checked/>
						<label for="rating3">3</label>
						<input id="rating2" type="radio" name="rating" value="2"/>
						<label for="rating2">2</label>
						<input id="rating1" type="radio" name="rating" value="1"/>
						<label for="rating1">1</label>
					</span>
				</div>
				<div class="description">
					<h5><i>Description</i></h5>
					<p>This is a book</p>
				</div>
			
				
				<div class="simpleCart_shelfItem">
					<p><i class="item_price"> Rs. {price}</i></p>
					
						  
						
				
				</div> 
					<div class="simpleCart_shelfItem">
					<p><i class="item_price"> Added on : {date}</i></p>
					
						  
						
				
				</div> 
			</div>
           
                </div>
                </div>
    )
}