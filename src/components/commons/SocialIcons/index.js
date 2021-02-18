import { SocialIconsWrapper } from './styles/SocialIcons';
import { LinkedinSquare } from '@styled-icons/boxicons-logos/LinkedinSquare'
import { Youtube } from '@styled-icons/boxicons-logos/Youtube'
import { Github } from '@styled-icons/boxicons-logos/Github';

export default function SocialIcons() {
  return (
    <SocialIconsWrapper>
      
        <li>
          <a href="" target="_blank">
            <LinkedinSquare height= "30" width= "30" color= "blue">
            </LinkedinSquare>
          </a>
        </li>
        <li>
          <a href="" target="_blank">
            <Youtube height= "30" width= "30" color= "red">
            </Youtube>
          </a>
        </li>
        <li>
          <a href="https://github.com/DiogoMalfatti" target="_blank">
            <Github height= "30" width= "30" color= "black">
            </Github>
          </a>
        </li>
        
    </SocialIconsWrapper>
  );
}