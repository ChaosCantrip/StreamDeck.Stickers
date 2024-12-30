import { action, DidReceiveSettingsEvent, KeyDownEvent, SingletonAction } from "@elgato/streamdeck";
import { execSync } from "child_process";


@action({ UUID: "com.chaoscantrip.stickers.copy-sticker" })
export class CopySticker extends SingletonAction<CopyStickerSettings> {

    override async onDidReceiveSettings(ev: DidReceiveSettingsEvent<CopyStickerSettings>): Promise<void> {
        const { settings } = ev.payload;

        await ev.action.setImage(settings.image_file);
    }
    
    override async onKeyDown(ev: KeyDownEvent<CopyStickerSettings>): Promise<void> {
        const { settings } = ev.payload;

        if (!settings.image_file) {
            // Handle missing image file.
            return;
        }

        execSync(`nircmd clipboard copyimage "${settings.image_file}"`);
    }
}


type CopyStickerSettings = {
    image_file?: string;
};
