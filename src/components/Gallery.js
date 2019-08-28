import React, {Component} from 'react';
import Masonry from 'react-masonry-component';
import Axios from "axios";


class Gallery extends Component {

	state = {
		gallery: [],
		page: 1,
		loading: true,
		search_query: '',
		searching: false,
		per_page: 20,
	}

	componentDidMount() {
		Axios.get('https://api.unsplash.com/photos/?client_id=a1961db13adcfaa59d32f271ffacbc410771f81b1fbc14636befe7cf1cd3214b&per_page=' + this.state.per_page + '&page=' + this.state.page).then(
			// res => console.log(res.data)
			res => this.setState({
				gallery: res.data,
				loading: false,
				page: this.state.page
			})
		)

		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}

	goNextPage = (e) => {
		Axios.get('https://api.unsplash.com/photos/?client_id=a1961db13adcfaa59d32f271ffacbc410771f81b1fbc14636befe7cf1cd3214b&per_page=' + this.state.per_page + '&page=' + this.state.page).then(
			// res => console.log(res.data)
			res => this.setState({
				gallery: res.data,
				loading: false,
				page: this.state.page + 1
			})
		)

		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}

	goPrevPage = (e) => {
		Axios.get('https://api.unsplash.com/photos/?client_id=a1961db13adcfaa59d32f271ffacbc410771f81b1fbc14636befe7cf1cd3214b&per_page=' + this.state.per_page + '&page=' + this.state.page).then(
			// res => console.log(res.data)
			res => this.setState({
				gallery: res.data,
				loading: false,
				page: this.state.page - 1
			})
		)

		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}

	searchQuery = (e) => {
		this.setState({
			search_query: e.target.value
		})
	}

	searchTrigger = (e) => {

		this.setState({
			loading: true
		});

		Axios.get('https://api.unsplash.com/search/photos/?client_id=a1961db13adcfaa59d32f271ffacbc410771f81b1fbc14636befe7cf1cd3214b&per_page=' + this.state.per_page + '&query=' + this.state.search_query + '&page=' + this.state.page).then(
			// res => console.log(res.data)
			res => this.setState({
				gallery: res.data.results,
				loading: false,
				page: 1,
				searching: true,
				total_found: res.data.total,
				total_found_page: res.data.total_pages,
			})
		)

		e.preventDefault();
	}

	goSearchNextPage = (e) => {

		this.setState({
			loading: true
		});

		Axios.get('https://api.unsplash.com/search/photos/?client_id=a1961db13adcfaa59d32f271ffacbc410771f81b1fbc14636befe7cf1cd3214b&per_page=' + this.state.per_page + '&query=' + this.state.search_query + '&page=' + this.state.page).then(
			// res => console.log(res.data)
			res => this.setState({
				gallery: res.data.results,
				loading: false,
				page: this.state.page + 1,
				searching: true,
				total_found: res.data.total,
				total_found_page: res.data.total_pages,
			})
		)

		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}

	goSearchPrevPage = (e) => {

		this.setState({
			loading: true
		});

		Axios.get('https://api.unsplash.com/search/photos/?client_id=a1961db13adcfaa59d32f271ffacbc410771f81b1fbc14636befe7cf1cd3214b&per_page=' + this.state.per_page + '&query=' + this.state.search_query + '&page=' + this.state.page).then(
			// res => console.log(res.data)
			res => this.setState({
				gallery: res.data.results,
				loading: false,
				page: this.state.page - 1,
				searching: true,
				total_found: res.data.total,
				total_found_page: res.data.total_pages,
			})
		)

		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}


	render() {

		let searchHeading = '';
		let goSearchBtnMarkup = '';
		let searchInfo = '';
		let pageNumber = '';
		let prev_btn_markup = '';
		if (this.state.searching === true) {
			searchHeading = <h2 className="m-0">You Seatched : {this.state.search_query}</h2>;
			goSearchBtnMarkup = <button className="btn btn-theme" onClick={this.goSearchNextPage}>Next</button>;
			searchInfo =
				<div className="alert alert-dark mt-4" role="alert">Total Found {this.state.total_found} Items | Page
					No {this.state.page - 1} - {this.state.total_found_page}</div>;
			pageNumber = <div className="page-num">Page Num {this.state.page}</div>;

			if (this.state.page <= 1) {
				prev_btn_markup = ''
			} else {
				prev_btn_markup = <button className="btn btn-theme" onClick={this.goSearchPrevPage}>Previous</button>
			}

		} else {
			searchHeading = <h2 className="m-0">Latest Photo</h2>;
			goSearchBtnMarkup = <button className="btn btn-theme" onClick={this.goNextPage}>Next</button>;
			searchInfo = '';
			pageNumber = <div className="page-num">Page Num {this.state.page}</div>;

			if (this.state.page <= 1) {
				prev_btn_markup = ''
			} else {
				prev_btn_markup = <button className="btn btn-theme" onClick={this.goPrevPage}>Previous</button>
			}

		}

		if (this.state.loading === true) {
			return (
				<div className="content-wrapper">
					<div className="container">
						<div className="row mb-5 justify-content-center">
							<div className="col-xl-6">
								<form action="" className="search-bar" onSubmit={this.seachTrigger}>
									<input type="text" placeholder="Search Your Photo" value={this.state.search_query}
									       onChange={this.searchQuery}/>
									<button type="submit"><i className="fas fa-search"></i></button>
								</form>
							</div>
						</div>

						<div className="row  align-items-center">
							<div className="col-xl-12">
								<h2>Loading ...</h2>
							</div>
						</div>
					</div>
				</div>
			)
		}


		return (
			<div className="content-wrapper">
				<div className="container">
					<div className="row mb-5 align-items-center">
						<div className="col-xl-6">
							{searchHeading}
						</div>
						<div className="col-xl-6">
							<form action="" className="search-bar" onSubmit={this.searchTrigger}>
								<input type="text" placeholder="Search Your Photo" value={this.state.search_query}
								       onChange={this.searchQuery}/>
								<button type="submit"><i className="fas fa-search"></i></button>
							</form>
						</div>
						<div className="col-xl-12">
							{searchInfo}
						</div>
					</div>
					<Masonry className={'row'}>
						{
							this.state.gallery.map((photo) => (
								<div className="col-xl-4" key={photo.id}>
									{console.log(photo)}
									<div className="gallery-wrap">
										<img src={photo.urls.regular} alt=""/>
										<div className="link-single">
											<a href={'photo?id=' + photo.id}><i className="fas fa-link"></i></a>
										</div>
										<div className="gallery-hover">
											<div className="author">
												<div className="author-img">
													<img src={photo.user.profile_image.small} alt=""/>
												</div>
												<h5>{photo.user.username}</h5>
											</div>
											<div className="download">
												<a href={photo.urls.full} target="_blank" rel="noopener noreferrer">
													<i className="fas fa-download"></i>
												</a>
											</div>
										</div>
									</div>
								</div>
							))
						}
					</Masonry>
					<div className="row  align-items-center">
						<div className="col-xl-5">
							{
								prev_btn_markup
							}
						</div>
						<div className="col-xl-2 text-center">
							{
								pageNumber
							}
						</div>
						<div className="col-xl-5 text-right">
							{
								goSearchBtnMarkup
							}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Gallery;