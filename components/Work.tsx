import Image from "next/image"
import Link from "next/link"

function Work({ work }) {
	console.log(work)
	return (
		<div className="mt-8">
			{work.map((proj, i) =>
				<div className="mt-4 mb-4 pb-4 border-b-2">
					<a href={proj.url}>
						<table className="w-full">
							<tbody>
								<tr className="grid grid-cols-4">
									<td className="align-middle bg-red-100">
										<h2 className="text-xl">{proj.title}</h2>
										<h4 className="italic">{proj.client}</h4>
										<h4 className="text-sm uppercase">{proj.categories + " "}</h4>
									</td>
									<td className="col-start-2">
										<Image src={proj.preview_1} alt={proj.title} layout="responsive" height={100} width={140} objectFit="cover"/>
									</td>
									<td className="col-start-3">
										<Image src={proj.preview_2} alt={proj.title} layout="responsive" height={100} width={140} objectFit="cover"/>
									</td>
									<td className="col-start-4">
										<Image src={proj.preview_3} alt={proj.title} layout="responsive" height={100} width={140} objectFit="cover"/>
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

