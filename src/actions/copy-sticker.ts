import { action, DidReceiveSettingsEvent, KeyDownEvent, SingletonAction } from "@elgato/streamdeck";
import { execSync } from "child_process";


@action({ UUID: "com.chaoscantrip.stickers.copy-sticker" })
export class CopySticker extends SingletonAction<CopyStickerSettings> {

    override async onDidReceiveSettings(ev: DidReceiveSettingsEvent<CopyStickerSettings>): Promise<void> {
        const { settings } = ev.payload;

        if (settings.image_file) {
            await ev.action.setImage(settings.image_file);
        }
    }
    
    override async onKeyDown(ev: KeyDownEvent<CopyStickerSettings>): Promise<void> {
        const { settings } = ev.payload;

        if (!settings.image_file) {
            await ev.action.showAlert();
            return;
        }

        try {
            execSync(`nircmd clipboard copyimage "${settings.image_file}"`);
            await ev.action.showOk();
        } catch (error) {
            await ev.action.showAlert();
        }
        
    }
}


type CopyStickerSettings = {
    image_file?: string;
};
