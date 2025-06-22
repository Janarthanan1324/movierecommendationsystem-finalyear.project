const Footer = () => {
	return (
		<footer className='py-6 text-white bg-black border-t border-gray-800 md:px-8 md:py-0'>
			<div className='flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row'>
				<p className='text-sm leading-loose text-center text-balance text-muted-foreground md:text-left'>
					Built by{" Janarthanan "}
					<a
						href='https://www.linkedin.com/in/janarthanan-s-130058304?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
						target='_blank'
						className='font-medium underline underline-offset-4'
					>
						linkedin
					</a>
					. The source code is available on{" "}
					<a
						href='https://github.com/Janarthanan1324'
						target='_blank'
						rel='noreferrer'
						className='font-medium underline underline-offset-4'
					>
						GitHub
					</a>
					.
				</p>
			</div>
		</footer>
	);
};
export default Footer;
