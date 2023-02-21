export default function Main() {
	return (
		<>
			<h1 className='mb-8 text-3xl font-bold'>
				Hi, <span className='text-yellow-300'>Austine</span>!
			</h1>

			<div className='grid grid-cols-1 md:grid-cols-2 lg:2  xl:grid-cols-6 gap-14'>
				<div className='w-auto h-auto xl:w-48 xl:h-48 bg-red-600 text-white font-semibold border-2 rounded-lg'>
					<div className='card'>
						<div className='card-actions justify-end'>
							<div className='p-4'>
								<span className=' rounded-full px-1 bg-green-400'>0</span>
							</div>
						</div>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							stroke-width='1.5'
							stroke='currentColor'
							className='w-8 h-8 ml-8'
						>
							<path
								stroke-linecap='round'
								stroke-linejoin='round'
								d='M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z'
							/>
						</svg>
						<div className='card-body'>
							<p>Join and Pay Transactions</p>
						</div>
					</div>
				</div>

				<div className='w-auto h-auto xl:w-48 xl:h-48 bg-yellow-600 text-white font-semibold border-2 rounded-lg'>
					<div className='card'>
						<div className='card-actions justify-end'>
							<div className='p-4'>
								<span className=' rounded-full px-1 bg-green-400'>0</span>
							</div>
						</div>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
							className='w-8 h-8 ml-7'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m-6 3.75l3 3m0 0l3-3m-3 3V1.5m6 9h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75'
							/>
						</svg>

						<div className='card-body'>
							<p>Accept | Reject Delivery</p>
						</div>
					</div>
				</div>

				<div className='w-auto h-auto xl:w-48 xl:h-48 bg-black text-white font-semibold border-2 rounded-lg'>
					<div className='card'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
							className='w-6 h-6 mt-14 ml-8'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z'
							/>
						</svg>

						<div className='card-body'>
							<p>My Transactions</p>
						</div>
					</div>
				</div>

				<div className='w-auto h-auto xl:w-48 xl:h-48 bg-[#616161] text-white font-semibold border-2 rounded-lg'>
					<div className='card'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
							className='w-6 h-6 mt-14 ml-8'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M14.121 7.629A3 3 0 009.017 9.43c-.023.212-.002.425.028.636l.506 3.541a4.5 4.5 0 01-.43 2.65L9 16.5l1.539-.513a2.25 2.25 0 011.422 0l.655.218a2.25 2.25 0 001.718-.122L15 15.75M8.25 12H12m9 0a9 9 0 11-18 0 9 9 0 0118 0z'
							/>
						</svg>

						<div className='card-body'>
							<p>Invite and Earn</p>
						</div>
					</div>
				</div>
			</div>

			<div className='grid grid-cols-12 mt-10 mb-7 text-center'>
				<div className='bg-[#212121] text-white font-semibold border-2 col-span-5 rounded-lg'>
					<div className='stats bg-[#212121] text-white'>
						<div className='stat mt-8'>
							<div className='stat-title text-yellow-500 text-3xl'>50</div>
							<div className='stat-value text-white text-base font-light'>
								Held Balance
							</div>
							<div className='stat-actions'>
								<sapn className=''>KES</sapn>
							</div>
						</div>

						<div className='stat mt-8'>
							<div className='stat-title text-yellow-500 text-3xl'>1</div>
							<div className='stat-value text-white text-base font-light'>
								Available Balance
							</div>
							<div className='stat-actions'>
								<sapn className=''>KES</sapn>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className='flex flex-row items-center'>
				<div className='flex'>
					<input
						type='text'
						id='website-admin'
						className='rounded-none rounded-lg'
						placeholder='elonmusk'
					/>
					<span className='inline-flex items-center px-3 text-sm text-white border border-l-0 bg-black'>
						Join Transactions
					</span>
				</div>
			</div>
		</>
	);
}
