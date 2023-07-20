


export function SkeletonLoading(){
	return(
		<div className="border border-zinc-400 shadow rounded-md p-4 max-w-sm h-full w-full mx-auto">
			<div className="animate-pulse flex space-x-4">
				<div className="rounded-full bg-zinc-600 h-10 w-10"></div>
				<div className="flex-1 space-y-7 py-1">
					<div className="h-2 bg-zinc-600 rounded"></div>
					<div className="space-y-3">
						<div className="grid grid-cols-3 gap-5">
							<div className="h-2 bg-zinc-500 rounded col-span-2"></div>
							<div className="h-2 bg-zinc-500 rounded col-span-1"></div>
							<div className="h-2 bg-zinc-500 rounded col-span-2"></div>
							<div className="h-2 bg-zinc-500 rounded col-span-1"></div>
							<div className="h-2 bg-zinc-500 rounded col-span-2"></div>
							<div className="h-2 bg-zinc-500 rounded col-span-1"></div>
							<div className="h-2 bg-zinc-500 rounded col-span-2"></div>
							<div className="h-2 bg-zinc-500 rounded col-span-1"></div>
							<div className="h-2 bg-zinc-500 rounded col-span-2"></div>
							<div className="h-2 bg-zinc-500 rounded col-span-1"></div>
							<div className="h-2 bg-zinc-500 rounded col-span-2"></div>
							<div className="h-2 bg-zinc-500 rounded col-span-1"></div>
						</div>
						<div className="h-2 bg-zinc-500 rounded"></div>
					</div>
				</div>	
  		</div>
			<div className="animate-pulse flex space-x-4 my-24">
				<div className="rounded-full bg-zinc-500 h-10 w-10"></div>
				<div className="flex-1 space-y-7 py-1">
					<div className="h-2 bg-zinc-500 rounded"></div>
					<div className="space-y-3">
						<div className="grid grid-cols-3 gap-5">
							<div className="h-2 bg-zinc-500 rounded col-span-2"></div>
							<div className="h-2 bg-zinc-500 rounded col-span-1"></div>
						</div>
						<div className="h-2 bg-zinc-500 rounded"></div>
					</div>
				</div>	
  		</div>
		</div>
	)
}