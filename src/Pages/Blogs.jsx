import { Link } from "react-router-dom";


const Blogs = () => {
	return (
		<section className='  px-4 sm:px-8 lg:px-12 py-8'>
			<div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
				<a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 ">
					<img src="https://source.unsplash.com/random/480x360" alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 bg-gray-500" />
					<div className="p-6 space-y-2 lg:col-span-5">
						<h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">Noster tincidunt reprimique ad pro</h3>
						<span className="text-xs text-gray-400">February 19, 2021</span>
						<p>Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in graece fuisset, eos affert putent doctus id.</p>
					</div>
				</a>
				<div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
					<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline ">
						<img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500" src="https://source.unsplash.com/random/480x360?1" />
						<div className="p-6 space-y-2">
							<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">In usu laoreet repudiare legendos</h3>
							<span className="text-xs ">January 21, 2021</span>
							<p>Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.</p>
						</div>
					</a>
					<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline ">
						<img role="presentation" className="object-cover w-full rounded h-44 " src="https://source.unsplash.com/random/480x360?2" />
						<div className="p-6 space-y-2">
							<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">In usu laoreet repudiare legendos</h3>
							<span className="text-xs ">January 22, 2021</span>
							<p>Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.</p>
						</div>
					</a>
					<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline ">
						<img role="presentation" className="object-cover w-full rounded h-44 " src="https://source.unsplash.com/random/480x360?3" />
						<div className="p-6 space-y-2">
							<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">In usu laoreet repudiare legendos</h3>
							<span className="text-xs text-gray-400">January 23, 2021</span>
							<p>Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.</p>
						</div>
					</a>
					<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline  hidden sm:block">
						<img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500" src="https://source.unsplash.com/random/480x360?4" />
						<div className="p-6 space-y-2">
							<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">In usu laoreet repudiare legendos</h3>
							<span className="text-xs text-gray-400">January 24, 2021</span>
							<p>Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.</p>
						</div>
					</a>
					<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline hidden sm:block">
						<img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500" src="https://source.unsplash.com/random/480x360?5" />
						<div className="p-6 space-y-2">
							<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">In usu laoreet repudiare legendos</h3>
							<span className="text-xs text-gray-400">January 25, 2021</span>
							<p>Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.</p>
						</div>
					</a>
					<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline  hidden sm:block">
						<img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500" src="https://source.unsplash.com/random/480x360?6" />
						<div className="p-6 space-y-2">
							<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">In usu laoreet repudiare legendos</h3>
							<span className="text-xs text-gray-400">January 26, 2021</span>
							<p>Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.</p>
						</div>
					</a>
				</div>
				<div className="flex justify-center">
					<button type="button" className="px-6 py-3 text-sm rounded-md hover:underline  text-gray-400">Load more posts...</button>
				</div>
			</div>
		</section>
	);
};

export default Blogs;