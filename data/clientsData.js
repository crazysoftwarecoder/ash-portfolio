import { v4 as uuidv4 } from 'uuid';

// Import images
import CanvaImage from '../public/images/brands/canva.png';
import AppleImage from '../public/images/brands/apple.png';
import AtlassianImage from '../public/images/brands/atlassian.png';
import BestBuyImage from '../public/images/brands/bestbuy.png';
import eBayImage from '../public/images/brands/ebay.png';
import WalmartImage from '../public/images/brands/walmartecommerce.png';
import WEXImage from '../public/images/brands/wex.png';
import PearsonVUEImage from '../public/images/brands/pearsonvue.png';
import PacksmithImage from '../public/images/brands/packsmith.png';
import WalgreensImage from '../public/images/brands/walgreens.png';

export const clientsHeading = 'Some of the brands I worked with';

export const clientsData = [
	{
		id: uuidv4(),
		title: 'Canva',
		img: CanvaImage,
	},
	{
		id: uuidv4(),
		title: 'Apple',
		img: AppleImage,
	},
	{
		id: uuidv4(),
		title: 'Atlassian',
		img: AtlassianImage,
	},
	{
		id: uuidv4(),
		title: 'Best Buy',
		img: BestBuyImage,
	},
	{
		id: uuidv4(),
		title: 'eBay',
		img: eBayImage,
	},
	{
		id: uuidv4(),
		title: 'Walmart',
		img: WalmartImage,
	},
	{
		id: uuidv4(),
		title: 'WEX',
		img: WEXImage,
	},
	{
		id: uuidv4(),
		title: 'Pearson VUE',
		img: PearsonVUEImage,
	},
	{
		id: uuidv4(),
		title: 'Packsmith',
		img: PacksmithImage,
	},
	{
		id: uuidv4(),
		title: 'Walgreens',
		img: WalgreensImage,
	},
];
