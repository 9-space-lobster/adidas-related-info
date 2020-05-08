import React from 'react';
import styled from 'styled-components';

const ymalMockData = [
	{productId: 'EG4960', image: 'https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy/71d8a38f532442a6a31faae700d3e37c_9366/EG4960_00_plp_standard.jpg', title: 'Superstar Shoes', price: 80, href: 'https://www.adidas.com/us/superstar-shoes/EG4960.html'},
	{productId: 'EG4957', image: 'https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy/d699a097bfb846298334aad80120f0f2_9366/EG4957_00_plp_standard.jpg', title: 'Superstar Shoes', price: 80, href: 'https://www.adidas.com/us/superstar-shoes/EG4957.html'},
	{productId: 'FV2808', image: 'https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy/2654f10f58e045c2a029ab7d00db4040_9366/FV2808_00_plp_standard.jpg', title: 'Superstar Shoes', price: 100, href: 'https://www.adidas.com/us/superstar-shoes/FV2808.html'},
	{productId: 'EG4960', image: 'https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy/71d8a38f532442a6a31faae700d3e37c_9366/EG4960_00_plp_standard.jpg', title: 'Superstar Shoes', price: 80, href: 'https://www.adidas.com/us/superstar-shoes/EG4960.html'},
	{productId: 'EG4957', image: 'https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy/d699a097bfb846298334aad80120f0f2_9366/EG4957_00_plp_standard.jpg', title: 'Superstar Shoes', price: 80, href: 'https://www.adidas.com/us/superstar-shoes/EG4957.html'},
	{productId: 'FV2808', image: 'https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy/2654f10f58e045c2a029ab7d00db4040_9366/FV2808_00_plp_standard.jpg', title: 'Superstar Shoes', price: 100, href: 'https://www.adidas.com/us/superstar-shoes/FV2808.html'},
	{productId: 'EG4960', image: 'https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy/71d8a38f532442a6a31faae700d3e37c_9366/EG4960_00_plp_standard.jpg', title: 'Superstar Shoes', price: 80, href: 'https://www.adidas.com/us/superstar-shoes/EG4960.html'},
	{productId: 'EG4957', image: 'https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy/d699a097bfb846298334aad80120f0f2_9366/EG4957_00_plp_standard.jpg', title: 'Superstar Shoes', price: 80, href: 'https://www.adidas.com/us/superstar-shoes/EG4957.html'},
	{productId: 'FV2808', image: 'https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy/2654f10f58e045c2a029ab7d00db4040_9366/FV2808_00_plp_standard.jpg', title: 'Superstar Shoes', price: 100, href: 'https://www.adidas.com/us/superstar-shoes/FV2808.html'},
	{productId: 'EG4960', image: 'https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy/71d8a38f532442a6a31faae700d3e37c_9366/EG4960_00_plp_standard.jpg', title: 'Superstar Shoes', price: 80, href: 'https://www.adidas.com/us/superstar-shoes/EG4960.html'},
	{productId: 'EG4957', image: 'https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy/d699a097bfb846298334aad80120f0f2_9366/EG4957_00_plp_standard.jpg', title: 'Superstar Shoes', price: 80, href: 'https://www.adidas.com/us/superstar-shoes/EG4957.html'},
	{productId: 'FV2808', image: 'https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy/2654f10f58e045c2a029ab7d00db4040_9366/FV2808_00_plp_standard.jpg', title: 'Superstar Shoes', price: 100, href: 'https://www.adidas.com/us/superstar-shoes/FV2808.html'}
];

class YouMayAlsoLike extends React.Component{
	constructor(props){
		super(props);

		this.state = {};
	}

	render(){
		return (
			<SectionContainer>
				<h5>you may also like</h5>
				<StyledCarousel />
			</SectionContainer>
		);
	}
};

const SectionContainer = styled.div`
	width: 60%;
	margin-bottom: 80px;
	padding: 0 40px;
	
	font-family: AdihausDIN,Helvetica,Arial,sans-serif;
	font-style: normal;
	font-weight: 400;

	> h5{
		font-size: 30px;
		line-height: 28px;
		font-family: AdineuePRO,Helvetica,Arial,sans-serif;
		font-style: normal;
		font-weight: 600;
		margin-bottom: 20px;
		text-transform: uppercase;
	}
`;

class Carousel extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			products: ymalMockData,
			currentPage: 0
		};

		this.cardRef = [];
		this.cardPerPage = 4;

		this.setCardRef = el => {
			this.cardRef.push(el);
		}

		this.moveRight = () => {
			let currentPage = this.state.currentPage + 1;
			let totalCard = this.cardRef.length;
			let card = currentPage * this.cardPerPage + 3;
			if(card >= totalCard){
				card = 0;
				currentPage = 0;
			}

			this.cardRef[card].scroll();
			this.setState({currentPage});
		}

		this.moveLeft = () => {
			let currentPage = this.state.currentPage - 1;
			let card = currentPage * this.cardPerPage + 1;
			let totalCard = this.cardRef.length;
			let lastPage = Math.ceil(totalCard / this.cardPerPage) - 1;
			if(card < 0){
				card = totalCard - 1;
				currentPage = lastPage;	
			}

			this.cardRef[card].scroll();
			this.setState({currentPage});
		}

		this.moveTo = (e) => {
			let page = Number(e.target.getAttribute('page'));
			let card = page * this.cardPerPage;
			this.cardRef[card].scroll();
			this.setState({currentPage: page});	
		}

	}

	render(){
		let index = 0;
		let pagination = [];
		let productCards = [];

		this.state.products.forEach( p => {	
			let snapStart = false;
			if(index % this.cardPerPage === 0){
				let isCurrentPage = (this.state.currentPage === Math.ceil(index / this.cardPerPage));
				let className = 'pagination-dot';
				if(isCurrentPage)
					className += ' current-page';

				pagination.push(
					<div key={index} page={Math.ceil(index / this.cardPerPage)} className={className} onClick={this.moveTo} />
				);
				snapStart = true;
			}

			productCards.push(<StyledProductCard ref={this.setCardRef} product={p} snapStart={snapStart} key={index} />);
			index++;
		});

		return (
			<div className={this.props.className}>
				<div className='image-list'>
					{productCards}
				</div>
				<div className='pagination-button'>
					<button onClick={this.moveLeft} className='left'>
						<svg>
							<symbol id="arrow-right" viewBox="0 0 10 24"><path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="2" d="M2 5.5L8.5 12 2 18.5"></path></symbol>
							<use href="#arrow-right"></use>
						</svg>							
					</button>
					<button onClick={this.moveRight.bind(this)} className='right'>
						<svg>
							<symbol id="arrow-right" viewBox="0 0 10 24"><path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="2" d="M2 5.5L8.5 12 2 18.5"></path></symbol>
							<use href="#arrow-right"></use>
						</svg>							
					</button>
				</div>
				<div className='pagination'>
					{pagination}
				</div>
			</div>
		);
	}
}

const StyledCarousel = styled(Carousel)`
	position: relative;

	.image-list{
		display: flex;
		overflow-x: auto;
		overflow-y: hidden;
		scroll-snap-type: x mandatory;
		-ms-overflow-style: none;

		&::-webkit-scrollbar{
			display: none;
		}
	}

	.pagination-button{
		display: flex;
		width: 100%;
		justify-content: space-between;
		position: absolute;
		top: calc(50% - 20px);

		button{
			width: 24px;
			height: 24px;
			background-color: hsla(0,0%,100%,.7);
			cursor: pointer;
			position: relative;

			svg{
				width: 100%;
				height: 100%;
			}
		}

		.left{
			left: 1px;

			svg{
				transform: rotate(180deg);
			}
		}

		.right{
			right: 2px;
		}
	}

	.pagination{
		margin-top: 10px;
		display: flex;
		justify-content: center;
		min-height: 10px;
	}

	.pagination-dot{
		margin: 0px 4px;
		width: 18px;
		border-bottom: solid 1.2px #000;
		cursor: pointer;
		min-height: 5px;

		&:hover{
			border-bottom: solid 4px #000;
		}
	}

	.current-page{
		border-bottom: solid 4px #000;
	}
`;

class ProductCard extends React.Component{
	constructor(props){
		super(props);

		this.state = {};

		this.cardRef = React.createRef();
	}

	scroll(){
		this.cardRef.current.scrollIntoView({behavior: "smooth"});
	}

	render(){
		let product = this.props.product;

		return (
			<div ref={this.cardRef} className={this.props.className}>
				<div className='heart-icon'>
					<svg>
						<symbol id="wishlist-inactive" viewBox="0 0 20 24"><path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="2" d="M7.38 6H4.42L2 10l8 8 8-8-2.41-4h-2.98L10 9 7.38 6z"></path></symbol>
						<symbol id="wishlist-active" viewBox="0 0 20 24"><path fill="currentColor" stroke="currentColor" stroke-miterlimit="10" stroke-width="2" d="M7.38 6H4.42L2 10l8 8 8-8-2.41-4h-2.98L10 9 7.38 6z"></path></symbol>
						<use href='#wishlist-inactive'/>
					</svg>
				</div>
				<a href={product.href}>
					<img className='product-image' src={product.image} />
					<div className='product-tag'>Originals</div>
					<div className='product-title'>{product.title}</div>
					<div className='product-price'>${product.price}</div>
				</a>
			</div>
		);
	}
}

const StyledProductCard = styled(ProductCard)`
	width: 24%;
	flex: 0 0 auto;
	position: relative;
	margin-right: 1%;
	border: 1px solid transparent;
	min-height: 330px;
	scroll-snap-stop: always;

	${
		props => (props.snapStart) ? "scroll-snap-align: start;" : ""
	}

	&:hover {
		border: 1px solid #000;
	}

	.heart-icon {
		position: absolute;
		right: 16px;
		top: 16px;
		width: 24px;
		height: 24px;

		svg {
			width: 100%;
			height: 100%;
		}
	}

	.product-image {
		width: 100%
	}

	a {
		text-decoration: none;
	}

	.product-tag {
		margin: 15px 10px;
		font-size: 12px;
		color: #767677;
	}

	.product-title, .product-price {
		margin: 15px 10px 0px 10px;
		text-transform: uppercase;
		letter-spacing: .5px;
		font-size: 12px;
		line-height: 16px;
		color: #000;
	}

	.product-price {
		margin: 5px 10px;
	}
`;

export default YouMayAlsoLike;
