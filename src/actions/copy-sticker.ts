import { action, DidReceiveSettingsEvent, KeyDownEvent, SingletonAction } from "@elgato/streamdeck";


@action({ UUID: "com.chaoscantrip.stickers.copy-sticker" })
export class CopySticker extends SingletonAction<CopyStickerSettings> {

    override async onDidReceiveSettings(ev: DidReceiveSettingsEvent<CopyStickerSettings>): Promise<void> {
        const { settings } = ev.payload;

        await ev.action.setImage(settings.image_file);
    }
    
    override async onKeyDown(ev: KeyDownEvent<CopyStickerSettings>): Promise<void> {
        // Copy sticker to clipboard
    }
}


type CopyStickerSettings = {
    image_file?: string;
};
