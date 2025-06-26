export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      farm_visits: {
        Row: {
          cocoa_bean_quality: string | null
          cocoa_tree_age: number | null
          created_at: string | null
          farmer_id: string | null
          field_officer_id: string | null
          gps_latitude: number | null
          gps_longitude: number | null
          humidity_level: number | null
          id: string
          pest_disease_signs: string | null
          polygon_boundaries: Json | null
          soil_type: string | null
          updated_at: string | null
          visit_date: string | null
          visit_notes: string | null
        }
        Insert: {
          cocoa_bean_quality?: string | null
          cocoa_tree_age?: number | null
          created_at?: string | null
          farmer_id?: string | null
          field_officer_id?: string | null
          gps_latitude?: number | null
          gps_longitude?: number | null
          humidity_level?: number | null
          id?: string
          pest_disease_signs?: string | null
          polygon_boundaries?: Json | null
          soil_type?: string | null
          updated_at?: string | null
          visit_date?: string | null
          visit_notes?: string | null
        }
        Update: {
          cocoa_bean_quality?: string | null
          cocoa_tree_age?: number | null
          created_at?: string | null
          farmer_id?: string | null
          field_officer_id?: string | null
          gps_latitude?: number | null
          gps_longitude?: number | null
          humidity_level?: number | null
          id?: string
          pest_disease_signs?: string | null
          polygon_boundaries?: Json | null
          soil_type?: string | null
          updated_at?: string | null
          visit_date?: string | null
          visit_notes?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "farm_visits_farmer_id_fkey"
            columns: ["farmer_id"]
            isOneToOne: false
            referencedRelation: "farmers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "farm_visits_field_officer_id_fkey"
            columns: ["field_officer_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      farmers: {
        Row: {
          created_at: string | null
          farmer_photo_url: string | null
          full_name: string
          gender: string | null
          id: string
          id_number: string | null
          id_type: string | null
          phone_number: string | null
          region: string
          registered_by: string | null
          sub_county: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          farmer_photo_url?: string | null
          full_name: string
          gender?: string | null
          id?: string
          id_number?: string | null
          id_type?: string | null
          phone_number?: string | null
          region: string
          registered_by?: string | null
          sub_county?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          farmer_photo_url?: string | null
          full_name?: string
          gender?: string | null
          id?: string
          id_number?: string | null
          id_type?: string | null
          phone_number?: string | null
          region?: string
          registered_by?: string | null
          sub_county?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "farmers_registered_by_fkey"
            columns: ["registered_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      issue_reports: {
        Row: {
          created_at: string | null
          description: string
          evidence_url: string | null
          field_officer_id: string | null
          id: string
          issue_type: string
          status: string | null
          supervisor_comments: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          description: string
          evidence_url?: string | null
          field_officer_id?: string | null
          id?: string
          issue_type: string
          status?: string | null
          supervisor_comments?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string
          evidence_url?: string | null
          field_officer_id?: string | null
          id?: string
          issue_type?: string
          status?: string | null
          supervisor_comments?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "issue_reports_field_officer_id_fkey"
            columns: ["field_officer_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      media_files: {
        Row: {
          created_at: string | null
          exif_data: Json | null
          farm_visit_id: string | null
          file_type: string | null
          file_url: string
          gps_latitude: number | null
          gps_longitude: number | null
          id: string
        }
        Insert: {
          created_at?: string | null
          exif_data?: Json | null
          farm_visit_id?: string | null
          file_type?: string | null
          file_url: string
          gps_latitude?: number | null
          gps_longitude?: number | null
          id?: string
        }
        Update: {
          created_at?: string | null
          exif_data?: Json | null
          farm_visit_id?: string | null
          file_type?: string | null
          file_url?: string
          gps_latitude?: number | null
          gps_longitude?: number | null
          id?: string
        }
        Relationships: [
          {
            foreignKeyName: "media_files_farm_visit_id_fkey"
            columns: ["farm_visit_id"]
            isOneToOne: false
            referencedRelation: "farm_visits"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          created_at: string | null
          full_name: string
          id: string
          is_active: boolean | null
          phone_number: string | null
          region: string | null
          role: Database["public"]["Enums"]["user_role"]
          sub_county: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          full_name: string
          id: string
          is_active?: boolean | null
          phone_number?: string | null
          region?: string | null
          role?: Database["public"]["Enums"]["user_role"]
          sub_county?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          full_name?: string
          id?: string
          is_active?: boolean | null
          phone_number?: string | null
          region?: string | null
          role?: Database["public"]["Enums"]["user_role"]
          sub_county?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      todo_tasks: {
        Row: {
          assigned_to: string | null
          created_at: string | null
          created_by: string | null
          description: string | null
          due_date: string | null
          id: string
          status: string | null
          title: string
          updated_at: string | null
        }
        Insert: {
          assigned_to?: string | null
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          due_date?: string | null
          id?: string
          status?: string | null
          title: string
          updated_at?: string | null
        }
        Update: {
          assigned_to?: string | null
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          due_date?: string | null
          id?: string
          status?: string | null
          title?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "todo_tasks_assigned_to_fkey"
            columns: ["assigned_to"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "todo_tasks_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      transfer_requests: {
        Row: {
          admin_comments: string | null
          created_at: string | null
          field_officer_id: string | null
          id: string
          preferred_region: string | null
          reason: string
          reviewed_at: string | null
          reviewed_by: string | null
          status: string | null
        }
        Insert: {
          admin_comments?: string | null
          created_at?: string | null
          field_officer_id?: string | null
          id?: string
          preferred_region?: string | null
          reason: string
          reviewed_at?: string | null
          reviewed_by?: string | null
          status?: string | null
        }
        Update: {
          admin_comments?: string | null
          created_at?: string | null
          field_officer_id?: string | null
          id?: string
          preferred_region?: string | null
          reason?: string
          reviewed_at?: string | null
          reviewed_by?: string | null
          status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "transfer_requests_field_officer_id_fkey"
            columns: ["field_officer_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "transfer_requests_reviewed_by_fkey"
            columns: ["reviewed_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      user_role: "admin" | "supervisor" | "analyst" | "field_officer"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      user_role: ["admin", "supervisor", "analyst", "field_officer"],
    },
  },
} as const
