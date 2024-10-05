from .cardGenerator import Cards
import base64

cards = Cards()

def jpg_to_base64(path):
    with open(path, "rb") as image_file:
        return base64.b64encode(image_file.read()).decode('utf-8')
def base64_to_jpg(base64_str, output_path):
    with open(output_path, "wb") as image_file:
        image_file.write(base64.b64decode(base64_str))


# generating card

base64_ = jpg_to_base64('app/services/human.jpg')
card = cards.generate_card(base64_str=base64_, card_type='bronze', card_name='some human')
base64_to_jpg(card, 'app/services/output_human.jpg')