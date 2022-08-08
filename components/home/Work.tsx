import Image from "next/image"

type PropTypes = {
    work:WorkTypes;
}

type WorkTypes = {
	[key: string]: any;
	title:string;
    hero:string;
    url:string;
}

type ProjTypes = {
	title: string;
	categories: string;
	preview_1: string;
	preview_2: string;
	preview_3: string;
	url: string;
}

function Work({ work }:PropTypes) {
	return (
		<div className="mt-12">
			{work.map((proj: WorkTypes, i: number) =>
				<div className="mt-4 mb-4 pb-4 border-b" key={i}>
					<a href={proj.url}>
						<table className="w-full">
							<tbody>
								<tr className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 hover:text-ribbon transition duration-500 ease-in-out">
									<td className="flex flex-col justify-center pr-6 lg:pr-16">
										<h2 className="text-xl lg:text-2xl leading-5 mb-2">{proj.title}</h2>
										<h4 className="text-xs md:text-sm leading-4 uppercase">{proj.categories.join(', ')}</h4>
									</td>
									<td className="col-start-2">
										<Image src={proj.preview_1} alt={proj.title} layout="responsive" height={100} width={140} objectFit="cover" className="hover:scale-105 transition duration-300" />
									</td>
									<td className="col-start-3">
										<Image src={proj.preview_2} alt={proj.title} layout="responsive" height={100} width={140} objectFit="cover" className="hover:scale-105 transition duration-300" />
									</td>
									<td className="hidden lg:block">
										<Image src={proj.preview_3} alt={proj.title} layout="responsive" height={100} width={140} objectFit="cover" className="hover:scale-105 transition duration-300" />
									</td>
								</tr>
							</tbody>
						</table>
					</a>
				</div>
			)}
		</div>
	)
}

export default Work

