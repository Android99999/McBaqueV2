import { useNavigate } from 'react-router-dom';

export const useNavigation = () => {
    const navigate = useNavigate();

    const navigateSignin = (): void => {
        navigate('/signin');
    };

    const navigateSignup = (): void => {
        navigate('/signup');
    };

    const navigatePortfolio = (): void => {
        navigate('/portfolio');
    };

    //add custome navigate
    // const navigateCustom = (params: string): void => {
    //     navigate(`/portfolio/${params}`);
    // }; if just needed
    
    return { navigateSignin, navigateSignup, navigatePortfolio };
};