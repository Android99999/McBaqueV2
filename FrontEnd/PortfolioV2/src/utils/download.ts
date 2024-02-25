import myCV from '../assets/files/MarkJohnBaqueCV.pdf'
import { DownloadType } from '../types/index'

export const DownloadCV = () => {
    const file: DownloadType = {path: myCV};
    // Trigger download
    window.open(file.path, '_blank');
}