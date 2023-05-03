import React from 'react';

const Blog = () => {
	return (
		<div>
			<button className="btn btn-warning ml-[530px] my-10">
				Download PDF
			</button>
			<div className="m-10 border border-orange-600 p-10 rounded-lg">
				<h3 className="text-2xl font-semibold text-orange-600">
					Tell us the differences between uncontrolled and controlled
					components.
				</h3>
				<p className="text-gray-500 font-semibold">
					In react, there are two types of components: uncontrolled
					and controlled. The main difference between them is how they
					handle data input and state. <br /> <br />
					<span className="text-black font-bold">
						Uncontrolled Components:
					</span>{' '}
					Uncontrolled components are a simpler and less verbose way
					of handling form input in React. With uncontrolled
					components, the state of the input is managed by the DOM
					itself. This means that the input's value is not stored in
					the component's state, but rather in the DOM node's value
					property. The component does not have direct control over
					the input's value, and therefore, there is no need to update
					the state every time the input value changes. Uncontrolled
					components can be used when the input data does not need to
					be validated or when the component needs to be initialized
					with a default value.
					<br /> <br />
					<span className="text-black font-bold">
						controlled Components:
					</span>
					Controlled components are components that are explicitly
					tied to a piece of state in the component's state. This
					means that every time the input value changes, the
					component's state is updated accordingly. This allows the
					component to have full control over the input's value and
					enables data validation and manipulation. Controlled
					components are often used when input data needs to be
					validated or when the component needs to respond to user
					input in real-time.
				</p>
			</div>
		</div>
	);
};

export default Blog;
