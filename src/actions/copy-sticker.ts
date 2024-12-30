import { action, DidReceiveSettingsEvent, KeyDownEvent, SingletonAction } from "@elgato/streamdeck";


@action({ UUID: "com.chaoscantrip.stickers.copy-sticker" })
export class CopySticker extends SingletonAction<CopyStickerSettings> {

    override onDidReceiveSettings(ev: DidReceiveSettingsEvent<CopyStickerSettings>): Promise<void> | void {
        // Set Image as sticker
    }
    
    override async onKeyDown(ev: KeyDownEvent<CopyStickerSettings>): Promise<void> {
        // Copy sticker to clipboard
    }
}


type CopyStickerSettings = {
    file?: string;
};
