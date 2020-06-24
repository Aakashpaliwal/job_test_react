import React, { Component } from "react";
import "./home.css";

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			filterStatus: false,
			filter_job_array_status: false,
			location: "",
			filter_job_array: [],
			job_array: [
				{
					position: "Front End Developer",
					company_name: "Letsventure",
					City: "Bangalore",
					Experience: "0-2",
					skills: ["AngularJs", "Java", "Ruby", "UI/UX"],
				},
				{
					position: "Java Developer",
					company_name: "Google Inc.",
					City: "NewDelhi",
					Experience: "2-4",
					skills: ["AngularJs", "Java", "Ruby", "UI/UX"],
				},
			],
			name: "",
			email: "",
			mobile: "",
			file: "",
			terms: "I agree to Terms and Condition of Letsventure.",
			submitStatus: false,
		};
	}

	componentDidMount() {
		console.log(this.state.job_array);
	}

	filterToggle = () => {
		this.setState({
			filterStatus: !this.state.filterStatus,
		});
	};

	changeHandler = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	locationFilter = (e) => {
		console.log(e.target.value);
		console.log(this.state.location);
		let newArr = this.state.job_array.filter(function (el) {
			return el.City == e.target.value || el.Experience == e.target.value;
		});
		console.log(newArr);
		this.setState({
			filter_job_array: newArr,
			filter_job_array_status: true,
		});
		console.log(this.state.filter_job_array);
	};

	applyHandler = (e) => {
		e.preventDefault();
		let body = {
			name: this.state.name,
			email: this.state.email,
			mobile: this.state.mobile,
			file: this.state.file,
			terms: this.state.terms,
		};
		console.log(body);
		this.setState({
			submitStatus: true,
		});
	};

	render() {
		let filter_job_table;
		if (this.state.filter_job_array.length > 0) {
			filter_job_table = (
				<div>
					{this.state.filter_job_array.length
						? this.state.filter_job_array.map(function (item, id) {
								return (
									<div className="job_inner_content" key={id}>
										<div className="row">
											<div className="col-2">
												<span className="company_logo">
													CL
												</span>
											</div>
											<div className="col-8">
												<h5>{item.position}</h5>
												<p
													style={{
														marginBottom: "0",
													}}
												>
													{item.company_name} |{" "}
													{item.City} |{" "}
													{item.Experience} Years.
												</p>
												<p>
													Skills : AngularJs, Java,
													Ruby, UI/UX
												</p>
											</div>
											<div className="col-2">
												<div className="social_icon">
													<ul>
														<li>
															<i
																class="fa fa-facebook-official"
																aria-hidden="true"
															></i>
														</li>
														<li>
															<i
																class="fa fa-twitter"
																aria-hidden="true"
															></i>
														</li>
													</ul>
												</div>
											</div>
											<div className="col-12">
												<hr />
											</div>
											<div className="col-12">
												<button
													className="btn btn-outline-info"
													style={{
														float: "right",
													}}
												>
													Apply
												</button>
											</div>
										</div>
									</div>
								);
						  })
						: "Loading..."}
				</div>
			);
		}
		return (
			<div>
				<section className="parent_container">
					<div className="container">
						<div className="row">
							<div className="col-4">
								<div className="input-group mb-3">
									<input
										type="text"
										className="form-control"
										placeholder="Search by Keyword"
										aria-label="Recipient's username"
										aria-describedby="basic-addon2"
									/>
									<div className="input-group-append">
										<button
											className="btn btn-outline-secondary"
											type="button"
										>
											<i
												class="fa fa-search"
												aria-hidden="true"
											></i>
										</button>
									</div>
								</div>
							</div>
							<div className="col-8">
								<div className="right_search">
									<div className="form-check form-check-inline">
										<input
											className="form-check-input"
											type="checkbox"
											id="inlineCheckbox1"
											value="All"
										/>
										<label
											className="form-check-label"
											for="inlineCheckbox1"
										>
											All
										</label>
									</div>
									<div className="form-check form-check-inline">
										<input
											className="form-check-input"
											type="checkbox"
											id="inlineCheckbox2"
											value="Fulltime"
										/>
										<label
											className="form-check-label"
											for="inlineCheckbox2"
										>
											Full-Time
										</label>
									</div>
									<div className="form-check form-check-inline">
										<input
											className="form-check-input"
											type="checkbox"
											id="inlineCheckbox2"
											value="Parttime"
										/>
										<label
											className="form-check-label"
											for="inlineCheckbox2"
										>
											Part-Time
										</label>
									</div>
									<div className="form-check form-check-inline">
										<input
											className="form-check-input"
											type="checkbox"
											id="inlineCheckbox2"
											value="Freelancer"
										/>
										<label
											className="form-check-label"
											for="inlineCheckbox2"
										>
											Freelancer
										</label>
									</div>
									<button type="submit" class="btn btn-info">
										Search
									</button>
								</div>
							</div>
							<div className="col-12">
								<hr />
							</div>
						</div>
					</div>

					<div className="advanced_search_container">
						<div className="container">
							<div className="row">
								<div className="col-12">
									<button
										className="btn btn-info"
										onClick={this.filterToggle}
										style={{ marginBottom: "10px" }}
									>
										Advanced Search
									</button>
									{this.state.filterStatus ? (
										<div className="filter_container">
											<div className="item">
												<div className="form-group">
													<label for="exampleFormControlSelect1">
														Filter by Location
													</label>
													<select
														className="form-control"
														id="exampleFormControlSelect1"
														onChange={(e) =>
															this.changeHandler(
																e
															)
														}
														onClick={(e) =>
															this.locationFilter(
																e
															)
														}
													>
														<option>
															Choose...
														</option>
														<option value="Bangalore">
															Bangalore
														</option>
														<option value="Pune">
															Pune
														</option>
														<option value="Hyderabad">
															Hyderabad
														</option>
														<option value="Chennai">
															Chennai
														</option>
														<option value="Mumbai">
															Mumbai
														</option>
														<option value="NewDelhi">
															New Delhi
														</option>
													</select>
												</div>
											</div>
											<div className="item">
												<div className="form-group">
													<label for="exampleFormControlSelect2">
														Filter by Experience
													</label>
													<select
														className="form-control"
														id="exampleFormControlSelect2"
														onChange={(e) =>
															this.changeHandler(
																e
															)
														}
														onClick={(e) =>
															this.locationFilter(
																e
															)
														}
													>
														<option>
															Choose...
														</option>
														<option value="0-2">
															0 - 2
														</option>
														<option value="2-4">
															2 - 4
														</option>
														<option value="4-6">
															4 - 6
														</option>
														<option value="6-8">
															6 - 8
														</option>
														<option value=">8">
															>8
														</option>
													</select>
												</div>
											</div>
										</div>
									) : null}
								</div>
							</div>
						</div>
					</div>

					<div className="content_section">
						<div className="container">
							<div className="row">
								<div className="col-12">
									{this.state.filter_job_array_status ? (
										filter_job_table
									) : this.state.job_array.length > 0 ? (
										<div>
											{this.state.job_array.length
												? this.state.job_array.map(
														function (item, id) {
															return (
																<div
																	className="job_inner_content"
																	key={id}
																>
																	<div className="row">
																		<div className="col-2">
																			<span className="company_logo">
																				CL
																			</span>
																		</div>
																		<div className="col-8">
																			<h5>
																				{
																					item.position
																				}
																			</h5>
																			<p
																				style={{
																					marginBottom:
																						"0",
																				}}
																			>
																				{
																					item.company_name
																				}{" "}
																				|{" "}
																				{
																					item.City
																				}{" "}
																				|{" "}
																				{
																					item.Experience
																				}{" "}
																				Years.
																			</p>
																			<p>
																				Skills
																				:
																				AngularJs,
																				Java,
																				Ruby,
																				UI/UX
																			</p>
																		</div>
																		<div className="col-2">
																			<div className="social_icon">
																				<ul>
																					<li>
																						<i
																							class="fa fa-facebook-official"
																							aria-hidden="true"
																						></i>
																					</li>
																					<li>
																						<i
																							class="fa fa-twitter"
																							aria-hidden="true"
																						></i>
																					</li>
																				</ul>
																			</div>
																		</div>
																		<div className="col-12">
																			<hr />
																		</div>
																		<div className="col-12">
																			<button
																				className="btn btn-outline-info"
																				style={{
																					float:
																						"right",
																				}}
																				data-toggle="modal"
																				data-target=".bd-example-modal-lg"
																			>
																				Apply
																			</button>
																		</div>
																	</div>
																</div>
															);
														}
												  )
												: "Loading..."}
										</div>
									) : (
										"Loading...+"
									)}
								</div>
								<div className="col-12">
									{/*Modal */}
									<div
										class="modal fade bd-example-modal-lg"
										tabindex="-1"
										role="dialog"
										aria-labelledby="myLargeModalLabel"
										aria-hidden="true"
									>
										<div class="modal-dialog modal-lg">
											<div class="modal-content">
												<div class="modal-header">
													<h5
														class="modal-title"
														id="exampleModalLabel"
													>
														Form
													</h5>
													<button
														type="button"
														class="close"
														data-dismiss="modal"
														aria-label="Close"
													>
														<span aria-hidden="true">
															&times;
														</span>
													</button>
												</div>
												<div class="modal-body">
													{!this.state
														.submitStatus ? (
														<form
															onSubmit={(e) =>
																this.applyHandler(
																	e
																)
															}
														>
															<div class="row">
																<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
																	<div class="form-group">
																		<label class="col-form-label">
																			Your
																			Name
																		</label>
																		<input
																			type="text"
																			class="form-control"
																			name="name"
																			value={
																				this
																					.state
																					.name
																			}
																			onChange={(
																				e
																			) =>
																				this.changeHandler(
																					e
																				)
																			}
																			required
																		/>
																	</div>
																</div>

																<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
																	<div class="form-group">
																		<label class="col-form-label">
																			Contact
																			Number
																		</label>
																		<input
																			type="number"
																			class="form-control"
																			name="mobile"
																			value={
																				this
																					.state
																					.mobile
																			}
																			onChange={(
																				e
																			) =>
																				this.changeHandler(
																					e
																				)
																			}
																			required
																		/>
																	</div>
																</div>
																<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
																	<div class="form-group">
																		<label class="col-form-label">
																			Email
																		</label>
																		<input
																			type="email"
																			class="form-control"
																			name="email"
																			value={
																				this
																					.state
																					.email
																			}
																			onChange={(
																				e
																			) =>
																				this.changeHandler(
																					e
																				)
																			}
																			required
																		/>
																	</div>
																</div>

																<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
																	<div class="form-group">
																		<div class="custom-file">
																			<input
																				type="file"
																				class="custom-file-input"
																				id="customFile"
																				name="file"
																				value={
																					this
																						.state
																						.file
																				}
																				onChange={(
																					e
																				) =>
																					this.changeHandler(
																						e
																					)
																				}
																			/>
																			<label
																				class="custom-file-label"
																				for="customFile"
																			>
																				Choose
																				file
																			</label>{" "}
																		</div>
																	</div>
																	<div class="form-check">
																		<input
																			class="form-check-input"
																			type="checkbox"
																			name="terms"
																			value={
																				this
																					.state
																					.terms
																			}
																			id="defaultCheck1"
																		/>
																		<label
																			class="form-check-label"
																			for="defaultCheck1"
																		>
																			I
																			agree
																			to
																			Terms
																			and
																			Consitions
																			of
																			Letsventure.
																		</label>
																	</div>
																</div>

																<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
																	<button
																		type="submit"
																		class="btn btn-primary"
																		// onClick={(
																		// 	e
																		// ) =>
																		// 	this.applyHandler(
																		// 		e
																		// 	)
																		// }
																	>
																		Apply
																	</button>
																	<button
																		type="button"
																		class="btn btn-secondary"
																		data-dismiss="modal"
																		style={{
																			marginLeft:
																				"15px",
																		}}
																	>
																		Close
																	</button>
																</div>
															</div>
														</form>
													) : (
														<center>
															<p>
																"Thanks for app
																lying for the
																job."
															</p>
														</center>
													)}
												</div>
											</div>
										</div>
									</div>
									{/* end Modal */}
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		);
	}
}

export default Home;
