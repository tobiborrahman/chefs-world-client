import React, { useRef } from 'react';
import { PDFDownloadLink, Document, Page, Text } from '@react-pdf/renderer';

const Blog = () => {
	const componentRef = useRef();
	return (
		<>
			<div>
				<div ref={componentRef}>
					<div className="bg-[#151920] py-20">
						<div className="mx-10 border border-orange-600 p-10 rounded-lg">
							<h3 className="text-2xl font-semibold text-orange-600">
								Tell us the differences between uncontrolled and
								controlled components.
							</h3>
							<p className="text-gray-300 font-semibold">
								In react, there are two types of components:
								uncontrolled and controlled. The main difference
								between them is how they handle data input and
								state. <br /> <br />
								<span className="text-white font-bold">
									Uncontrolled Components:
								</span>{' '}
								Uncontrolled components are a simpler and less
								verbose way of handling form input in React.
								With uncontrolled components, the state of the
								input is managed by the DOM itself. This means
								that the input's value is not stored in the
								component's state, but rather in the DOM node's
								value property. The component does not have
								direct control over the input's value, and
								therefore, there is no need to update the state
								every time the input value changes. Uncontrolled
								components can be used when the input data does
								not need to be validated or when the component
								needs to be initialized with a default value.
								<br /> <br />
								<span className="text-white font-bold">
									controlled Components:
								</span>
								Controlled components are components that are
								explicitly tied to a piece of state in the
								component's state. This means that every time
								the input value changes, the component's state
								is updated accordingly. This allows the
								component to have full control over the input's
								value and enables data validation and
								manipulation. Controlled components are often
								used when input data needs to be validated or
								when the component needs to respond to user
								input in real-time.
							</p>
						</div>
						<div className="mx-10 border border-orange-600 p-10 rounded-lg my-10">
							<h3 className="text-2xl font-semibold text-orange-600">
								How to validate React props using PropTypes
							</h3>
							<p className="text-gray-300 font-semibold">
								Props and PropTypes are important mechanisms for
								passing read-only attributes between React
								components. We can use React props, short for
								properties, to send data from one component to
								another. If a component receives the wrong type
								of props, it can cause bugs and unexpected
								errors in your app.
								<br /> <br />
								PropTypes is React's internal mechanism for
								adding type checking to component props. React
								components use a special property called
								propTypes to set up type checking, When props
								are passed to a React component, they are
								checked against the type definitions configured
								in the propTypes property.
								<br />
								You can also use the prop-types library in react
								to validate prop types.
							</p>
						</div>
						<div className="mx-10 border border-orange-600 p-10 rounded-lg my-10">
							<h3 className="text-2xl font-semibold text-orange-600">
								The difference between nodejs and express js.
							</h3>
							<p className="text-gray-300 font-semibold">
								Node.js and Express.js are both popular
								JavaScript technologies for building web
								applications, but they serve different purposes.
								<br /> <br />
								Node.js is a JavaScript runtime built on
								Chrome's V8 JavaScript engine. It allows you to
								run JavaScript code outside of a browser
								environment, and it provides a number of
								built-in modules for common tasks such as
								working with the file system, networking, and
								cryptography.
								<br />
								Express.js, on the other hand, is a lightweight
								web framework built on top of Node.js. It
								provides a set of features for building web
								applications such as handling HTTP requests and
								responses, routing, middleware, and templating.
							</p>
						</div>
						<div className="mx-10 border border-orange-600 p-10 rounded-lg my-10">
							<h3 className="text-2xl font-semibold text-orange-600">
								What is a custom hook, and why will you create a
								custom hook?
							</h3>
							<p className="text-gray-300 font-semibold">
								A custom hook in React is a function that allows
								you to extract and reuse logic that is commonly
								used across components. Custom hooks are created
								using the same basic rules as React's built-in
								hooks, but they can have any name and can use
								other hooks as well. <br />
								Here are some reasons why you might want to
								create a custom hook:
								<br /> <br />
								<span className="text-white font-bold">
									Reusability:
								</span>{' '}
								Custom hooks can help you reuse logic across
								components. For example, if you have a set of
								functions that you use across multiple
								components, you can extract them into a custom
								hook and reuse it wherever you need it. <br />{' '}
								<span className="text-white font-bold">
									Code organization:
								</span>{' '}
								Custom hooks can help you organize your code and
								make it easier to maintain. By extracting
								reusable logic into a separate file, you can
								keep your components clean and focused on their
								specific responsibilities. <br />{' '}
								<span className="text-white font-bold">
									Abstraction:
								</span>{' '}
								Abstraction: Custom hooks can abstract complex
								logic into a simple interface that can be used
								by other components. This can make your code
								more modular and easier to reason about. <br />
								<span className="text-white font-bold">
									Testing:
								</span>{' '}
								Custom hooks can be easily tested in isolation,
								which can help you ensure that your code is
								working as expected.
								<br />
							</p>
						</div>
					</div>
				</div>

				<PDFDownloadLink
					document={
						<Document>
							<Page>
								<div className="mx-10 border border-orange-600 p-10 rounded-lg">
									<Text className="text-2xl font-semibold text-orange-600">
										Tell us the differences between
										uncontrolled and controlled components.
									</Text>
									<Text className="text-gray-300 font-semibold">
										In react, there are two types of
										components: uncontrolled and controlled.
										The main difference between them is how
										they handle data input and state. <br />{' '}
										<br />
										<span className="text-white font-bold">
											Uncontrolled Components:
										</span>{' '}
										Uncontrolled components are a simpler
										and less verbose way of handling form
										input in React. With uncontrolled
										components, the state of the input is
										managed by the DOM itself. This means
										that the input's value is not stored in
										the component's state, but rather in the
										DOM node's value property. The component
										does not have direct control over the
										input's value, and therefore, there is
										no need to update the state every time
										the input value changes. Uncontrolled
										components can be used when the input
										data does not need to be validated or
										when the component needs to be
										initialized with a default value.
										<br /> <br />
										<span className="text-white font-bold">
											controlled Components:
										</span>
										Controlled components are components
										that are explicitly tied to a piece of
										state in the component's state. This
										means that every time the input value
										changes, the component's state is
										updated accordingly. This allows the
										component to have full control over the
										input's value and enables data
										validation and manipulation. Controlled
										components are often used when input
										data needs to be validated or when the
										component needs to respond to user input
										in real-time.
									</Text>
								</div>
								<div className="mx-10 border border-orange-600 p-10 rounded-lg my-10">
									<Text className="text-2xl font-semibold text-orange-600">
										How to validate React props using
										PropTypes
									</Text>
									<Text className="text-gray-300 font-semibold">
										Props and PropTypes are important
										mechanisms for passing read-only
										attributes between React components. We
										can use React props, short for
										properties, to send data from one
										component to another. If a component
										receives the wrong type of props, it can
										cause bugs and unexpected errors in your
										app.
										<br /> <br />
										PropTypes is React's internal mechanism
										for adding type checking to component
										props. React components use a special
										property called propTypes to set up type
										checking, When props are passed to a
										React component, they are checked
										against the type definitions configured
										in the propTypes property.
										<br />
										You can also use the prop-types library
										in react to validate prop types.
									</Text>
								</div>
								<div className="mx-10 border border-orange-600 p-10 rounded-lg my-10">
									<Text className="text-2xl font-semibold text-orange-600">
										The difference between nodejs and
										express js.
									</Text>
									<Text className="text-gray-300 font-semibold">
										Node.js and Express.js are both popular
										JavaScript technologies for building web
										applications, but they serve different
										purposes.
										<br /> <br />
										Node.js is a JavaScript runtime built on
										Chrome's V8 JavaScript engine. It allows
										you to run JavaScript code outside of a
										browser environment, and it provides a
										number of built-in modules for common
										tasks such as working with the file
										system, networking, and cryptography.
										<br />
										Express.js, on the other hand, is a
										lightweight web framework built on top
										of Node.js. It provides a set of
										features for building web applications
										such as handling HTTP requests and
										responses, routing, middleware, and
										templating.
									</Text>
								</div>
								<div className="mx-10 border border-orange-600 p-10 rounded-lg my-10">
									<Text className="text-2xl font-semibold text-orange-600">
										What is a custom hook, and why will you
										create a custom hook?
									</Text>
									<Text className="text-gray-300 font-semibold">
										A custom hook in React is a function
										that allows you to extract and reuse
										logic that is commonly used across
										components. Custom hooks are created
										using the same basic rules as React's
										built-in hooks, but they can have any
										name and can use other hooks as well.{' '}
										<br />
										Here are some reasons why you might want
										to create a custom hook:
										<br /> <br />
										<span className="text-white font-bold">
											Reusability:
										</span>{' '}
										Custom hooks can help you reuse logic
										across components. For example, if you
										have a set of functions that you use
										across multiple components, you can
										extract them into a custom hook and
										reuse it wherever you need it. <br />{' '}
										<span className="text-white font-bold">
											Code organization:
										</span>{' '}
										Custom hooks can help you organize your
										code and make it easier to maintain. By
										extracting reusable logic into a
										separate file, you can keep your
										components clean and focused on their
										specific responsibilities. <br />{' '}
										<span className="text-white font-bold">
											Abstraction:
										</span>{' '}
										Abstraction: Custom hooks can abstract
										complex logic into a simple interface
										that can be used by other components.
										This can make your code more modular and
										easier to reason about. <br />
										<span className="text-white font-bold">
											Testing:
										</span>{' '}
										Custom hooks can be easily tested in
										isolation, which can help you ensure
										that your code is working as expected.
										<br />
									</Text>
								</div>
							</Page>
						</Document>
					}
					fileName="my-document.pdf"
				>
					{({ loading }) =>
						loading ? (
							'Loading document...'
						) : (
							<button className="py-3 px-7 ml-[540px] absolute -mt-16  text-1xl text-white font-bold hover:bg-orange-700 bg-orange-600 duration-300 mr-6">
								Download PDF!
							</button>
						)
					}
				</PDFDownloadLink>
			</div>
		</>
	);
};

export default Blog;
