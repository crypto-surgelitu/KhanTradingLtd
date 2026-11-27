export interface NotificationPayload {
  to: string // email or phone
  subject?: string
  body: string
  channel: 'email' | 'sms' | 'whatsapp'
}

export interface NotificationProvider {
  send(payload: NotificationPayload): Promise<void>
}

// Provider-agnostic interface per AGENTS.md Section 8
export class NotificationService {
  private provider: NotificationProvider

  constructor(provider: NotificationProvider) {
    this.provider = provider
  }

  async send(payload: NotificationPayload) {
    await this.provider.send(payload)
  }
}
