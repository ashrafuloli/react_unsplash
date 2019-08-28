import React, {Component} from 'react';
import Axios from 'axios';
import Slider from 'react-slick';

class Photo extends Component {
	state = {
		photo: [],
		loading: true,
		collection: []
	};
	componentDidMount() {
		let search = window.location.search; // could be '?foo=bar'
		let params = new URLSearchParams(search);
		let photo_id = params.get('id');

		Axios.get('https://api.unsplash.com/photos/' + photo_id + '/?client_id=a1961db13adcfaa59d32f271ffacbc410771f81b1fbc14636befe7cf1cd3214b').then(
			// res => console.log(res.data)
			res => this.setState({
				photo: res.data,
				loading: false,
				collection: res.data.related_collections.results
			})
		)

	}

	render() {

		let settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 4,
			slidesToScroll: 1
		};

		console.log(this.state.photo);
		let photo = this.state.photo;
		let collection = this.state.collection;
		console.log(collection);
		return (
			<div className="content-wrapper">
				<div className="container">
					<div className="row">
						<div className="col-xl-12">
							<div className="photo-details">
								<div className="photo-single-info">
									{photo.story ? <h2 className="text-center">{photo.story && photo.story.description}</h2> : ''}

									<ul>
										<li><b htmlFor="uplaodedd_by">Uploaded by</b> {photo.user && photo.user.first_name} {photo.user && photo.user.last_name}</li>
										{photo.updated_at ? <li><b htmlFor="upload_date">Upload date</b> {photo.updated_at}</li> : ''}
										<li><b htmlFor="camera_model">Camera model</b> {photo.exif && photo.exif.model}</li>
									</ul>

									<a target="_blank" rel="noopener noreferrer" href={photo.links && photo.links.download} download>Download <i className="fas fa-download"></i></a>
								</div>
								<img src={photo.urls && photo.urls.full} alt="" className="img-fluid"/>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-xl-12">
							<Slider {...settings}>
								{
									// if you need large slider
									collection.map(relatedInfo => (
										relatedInfo.preview_photos.map(photo => (
											<div key={photo.id}>
												{console.log(photo)}
												<a href={photo.urls.full}><img src={photo.urls.thumb} alt={photo.title}/></a>
											</div>
										))
									))
								}
							</Slider>
							<div className=" related">
								{
									// collection.map(relatedInfo => (
									// 	<div key={relatedInfo.id}>
									// 		<img src={relatedInfo.cover_photo.urls.thumb} alt=""/>
									// 	</div>
									// ))
								}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Photo;