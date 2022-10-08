import Croppie from "croppie";
import 'croppie/croppie.css';

export const avatarController = ({inputFale, uploadResult}) => {
  const upload = document.querySelector(inputFale);
  const avatar = document.querySelector(uploadResult);

  avatar.style.display = 'none';

  const crp = new Croppie(avatar, {
    boundary: { width: 300, height: 300, type: 'square' },
    viewport: { width: 200, height: 200, type: 'circle' } 
  });

  const readFile = ({target: input}) => {

    if (input.files && input.files[0]) {
      const reader = new FileReader();

      reader.addEventListener('loadend', (e) => {
        avatar.style.display = 'block';
        crp.bind({url: e.target.result})
      }) 

      reader.readAsDataURL(input.files[0]);
    }

  };

  upload.addEventListener('change', readFile)

  return crp;
}