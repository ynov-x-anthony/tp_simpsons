interface AvatarProps {
	image: string;
	firstName: string;
	lastName: string;
}

function Avatar({ image, firstName, lastName }: AvatarProps) {
	return <img src={image} alt={`${firstName} ${lastName}`} />;
}

export default Avatar;
