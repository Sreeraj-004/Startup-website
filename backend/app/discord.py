import requests
import os
from dotenv import load_dotenv
load_dotenv()

DISCORD_WEBHOOK_URL = os.getenv("DISCORD_WEBHOOK_URL")

def send_discord_notification(contact_data: dict):
    content = f"""
**New Contact Received!**
- Name: {contact_data['name']}
- Email: {contact_data['email']}
- Phone: {contact_data['phone']}
- Role: {contact_data['role']}
- Message: {contact_data['message']}
- Time: {contact_data['created_at']}
    """
    data = {"content": content}
    try:
        response = requests.post(DISCORD_WEBHOOK_URL, json=data)
        response.raise_for_status()
    except requests.exceptions.RequestException as e:
        print(f"Failed to send Discord notification: {e}")
